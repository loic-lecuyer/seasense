using Exavision.Seasense.Core.Extensions;
using Serilog;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;

namespace Exavision.Seasense.Core.Network {
    /// <summary>
    /// Tcp client can extract specific byte trame
    /// </summary>
    public abstract class TcpByteClient {
        /// <summary>
        /// Defines the latestMessages.
        /// </summary>
        private readonly List<string> latestMessages = new List<string>();

        /// <summary>
        /// Defines the latestMessageMaxCount.
        /// </summary>
        private readonly int latestMessageMaxCount = 100;

        /// <summary>
        /// Defines the minSendDelay.
        /// </summary>
        public int MinSendDelay { get; set; } = 60;

        /// <summary>
        /// Defines the latestMessageLocker.
        /// </summary>
        private readonly Object latestMessageLocker = new object();

        /// <summary>
        /// Defines the enableReceive.
        /// </summary>
        private readonly bool enableReceive = true;

        /// <summary>
        /// Defines the enableSend.
        /// </summary>
        private readonly bool enableSend = true;

        /// <summary>
        /// Defines the sendQueue.
        /// </summary>
        private readonly ConcurrentQueue<byte[]> sendQueue = new ConcurrentQueue<byte[]>();

        /// <summary>
        /// Defines the hasMessageToSend.
        /// </summary>
        private bool hasMessageToSend = false;

        /// <summary>
        /// Gets or sets the Client.
        /// </summary>
        public TcpClient Client { get; set; }

        /// <summary>
        /// Defines the taskSend.
        /// </summary>
        private Task taskSend;

        /// <summary>
        /// Defines the taskReceive.
        /// </summary>
        private Task taskReceive;

        /// <summary>
        /// Defines the cancelSource.
        /// </summary>
        private CancellationTokenSource cancelSource;

        /// <summary>
        /// Defines the endpoint.
        /// </summary>
        private IPEndPoint endpoint;

        /// <summary>
        /// Defines the networkStream.
        /// </summary>
        private NetworkStream networkStream;

        /// <summary>
        /// Gets or sets a value indicating whether Connected.
        /// </summary>
        public bool Connected { get; set; }

        /// <summary>
        /// Defines the sendDate.
        /// </summary>
        private DateTime sendDate;

        /// <summary>
        /// Gets the SendLatency.
        /// </summary>
        public TimeSpan SendLatency { get; private set; } = TimeSpan.FromSeconds(0);

        /// <summary>
        /// Defines the OnMessageReceived.
        /// </summary>
        public event EventHandler<byte[]> OnMessageReceived;

        /// <summary>
        /// Get Latest network communication message
        /// </summary>
        /// <returns>List of string representation of network message (hexadecimal string)</returns>
        public List<string> GetLatestMessages() {
            List<string> messages = null;
            lock (latestMessageLocker) {
                messages = new List<string>(this.latestMessages.ToArray());
                this.latestMessages.Clear();
            }
            return messages;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="TcpPelcoClient"/> class.
        /// </summary>
        protected TcpByteClient() {
            this.sendDate = DateTime.Now;

        }
        private readonly bool useSendQueue = true;
        /// <summary>
        /// Send byte array of data to client
        /// </summary>
        /// <param name="data">Byte array to send</param>
        /// <returns>True if message succesfull sended</returns>
        public bool Send(byte[] data) {
            if (this.networkStream != null && this.Connected && enableSend) {
                if (useSendQueue) {
                    this.sendQueue.Enqueue(data);
                    this.hasMessageToSend = true;
                    return true;
                }
                else {
                    this.TrySendMessage(data);
                    Thread.Sleep(this.MinSendDelay);
                }

            }

            return false;
        }

        /// <summary>
        /// The Start.
        /// </summary>
        /// <param name="endPoint">The endPoint<see cref="EndPoint"/>.</param>
        public void Start(EndPoint endPoint) {
            this.endpoint = endPoint as IPEndPoint;
            this.cancelSource = new CancellationTokenSource();
            this.taskSend = Task.Factory.StartNew(LoopSend);
            this.taskReceive = Task.Factory.StartNew(LoopReceive);
        }

        /// <summary>
        /// The LoopSend.
        /// </summary>
        private void LoopSend() {
            Thread.CurrentThread.Name = "TcpPelcoClient LoopSend " + this.endpoint;
            while (!this.cancelSource.IsCancellationRequested) {
                if (this.hasMessageToSend && this.sendQueue.Count > 0) {
                    this.SendAllQueue();
                    this.hasMessageToSend = false;
                }
                else {
                    this.cancelSource.Token.WaitHandle.WaitOne(5);
                }
            }
        }

        /// <summary>
        /// The SendAllQueue.
        /// </summary>
        private void SendAllQueue() {
            while (this.sendQueue.Count > 0) {
                if (this.sendQueue.TryDequeue(out byte[] command)) {
                    this.TrySendMessage(command);
                    Thread.Sleep(this.MinSendDelay);

                }
            }
        }


        /// <summary>
        /// Try to send byte array message to client
        /// </summary>
        /// <param name="command">Byte array message</param>
        private void TrySendMessage(byte[] command) {
            try {
                this.networkStream.Write(command, 0, command.Length);
                this.networkStream.Flush();
                this.SendLatency = DateTime.Now - this.sendDate;
                this.sendDate = DateTime.Now;
                string message = ("Byte => " + command.ToHexString());
                if (debug) Debug.WriteLine(message);
                this.AddToLatestMessage(message);
                Log.Verbose(message);
                Log.Verbose("Pelco SendQueue " + this.sendQueue.Count);

            }
            catch (Exception ex) {
                string log = "TcpPelcoClient : Error when Process send Message " + ex.Message;
                Log.Error(log);
            }
        }

        /// <summary>
        /// The LoopReceive.
        /// </summary>
        private void LoopReceive() {
            Thread.CurrentThread.Name = "TcpPelcoClient LoopReceive " + this.endpoint;
            List<byte> buffer = new List<byte>();
            while (!this.cancelSource.IsCancellationRequested) {
                try {
                    if (this.Client == null) {
                        this.Client = new TcpClient();
                    }
                    if (!this.Client.Connected) {
                        this.Client = new TcpClient();
                        this.Client.Connect(endpoint);
                    }
                    this.Connected = this.Client.Connected;
                    this.networkStream = Client.GetStream();

                    while (!this.cancelSource.IsCancellationRequested) {
                        if (enableReceive) {
                            this.TryRead(buffer);
                        }
                        this.cancelSource.Token.WaitHandle.WaitOne(5);
                    }
                }
                catch (Exception ex) {
                    string log = "TcpCoreStringClient can't connect " + ex.Message;
                    Log.Warning(log);
                }
                this.Connected = false;
                // Wait 500ms before reconnect
                this.cancelSource.Token.WaitHandle.WaitOne(500);
            }
        }
        private readonly bool debug = false;
        /// <summary>
        /// Try read data from network stream
        /// </summary>
        /// <param name="buffer">List of byte to apppend readed byte</param>
        private void TryRead(List<byte> buffer) {
            byte[] readBuffer = new byte[128];
            int byteRead = this.networkStream.Read(readBuffer, 0, readBuffer.Length);
            byte[] result = new byte[byteRead];
            Array.Copy(readBuffer, result, byteRead);
            buffer.AddRange(result);
            while (this.TryExtractTrame(buffer, out byte[] commandBytes)) {
                try { this.OnMessageReceived?.Invoke(this, commandBytes); }
                catch (Exception ex) {
                    string log = "TcpPelcoClient : Error when Process Read Message " + ex.Message;
                    Log.Error(log);
                }
                string message = "Byte <= " + commandBytes.ToHexString();
                if (debug) Debug.WriteLine(message);
                this.AddToLatestMessage(message);
                Log.Verbose(message);
            }
        }

        /// <summary>
        /// Try to extract specific trame from buffer
        /// If trame is finded buffer is reduce is length
        /// </summary>
        /// <param name="circularBuffer">Input list of byte</param>
        /// <param name="trame">Byte array of specific trame </param>
        /// <returns></returns>
        public abstract bool TryExtractTrame(List<byte> circularBuffer, out byte[] trame);

        /// <summary>
        /// The AddToLatestMessage.
        /// </summary>
        /// <param name="message">The message<see cref="string"/>.</param>
        private void AddToLatestMessage(string message) {
            Log.Verbose(message);
            lock (latestMessageLocker) {
                this.latestMessages.Add(message);
            }
            this.CleanLatestMessages();
        }

        /// <summary>
        /// The CleanLatestMessages.
        /// </summary>
        private void CleanLatestMessages() {
            lock (latestMessageLocker) {
                while (latestMessages.Count > latestMessageMaxCount) {
                    latestMessages.RemoveAt(0);
                }
            }
        }

        /// <summary>
        /// The Stop.
        /// </summary>
        public void Stop() {
            this.hasMessageToSend = false;
            if (this.cancelSource != null) this.cancelSource.Cancel();
            if (this.networkStream != null) {
                try {
                    this.networkStream.Close();
                }
                catch (Exception ex) {
                    Log.Warning("Error when Close networkStream " + ex.Message);
                }
                try {
                    this.networkStream.Dispose();
                }
                catch (Exception ex) {
                    Log.Warning("Error when Dispose networkStream " + ex.Message);
                }
            }

            if (this.taskSend != null && this.taskSend.Status == TaskStatus.Running) this.taskSend.Wait();
            if (this.taskReceive != null && this.taskReceive.Status == TaskStatus.Running) this.taskReceive.Wait();
        }
    }
}

