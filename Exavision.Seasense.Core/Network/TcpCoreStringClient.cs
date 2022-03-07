namespace Exavision.Seasense.Core.Network {
    using global::System;
    using global::System.Collections.Concurrent;
    using global::System.Collections.Generic;
    using global::System.IO;
    using global::System.Linq;
    using global::System.Net;
    using global::System.Net.Sockets;
    using global::System.Text;
    using global::System.Threading;
    using global::System.Threading.Tasks;
    using Serilog;

    /// <summary>
    /// Defines the <see cref="TcpCoreStringClient" />.
    /// </summary>
    public class TcpCoreStringClient : IStringClient {
        /// <summary>
        /// Defines the sendResetEvent.
        /// </summary>
        private readonly ManualResetEvent sendResetEvent = new ManualResetEvent(false);

        /// <summary>
        /// Defines the sendQueue.
        /// </summary>
        private readonly ConcurrentQueue<string> sendQueue = new ConcurrentQueue<string>();


        /// <summary>
        /// Defines the latestMessages.
        /// </summary>
        private readonly List<string> latestMessages = new List<string>();

        /// <summary>
        /// Defines the latestMessageMaxCount.
        /// </summary>
        private readonly int latestMessageMaxCount = 100;

        /// <summary>
        /// Defines the latestMessageLocker.
        /// </summary>
        private readonly Object latestMessageLocker = new object();

        /// <summary>
        /// Defines the sendLocker.
        /// </summary>
        private readonly Object sendLocker = new Object();

        /// <summary>
        /// Gets or sets the Client.
        /// </summary>
        public TcpClient Client { get; set; }

        /// <summary>
        /// Defines the receiveTask.
        /// </summary>
        private Task receiveTask;

        /// <summary>
        /// Defines the sendTask.
        /// </summary>
        private Task sendTask;

        /// <summary>
        /// Defines the cancelSource.
        /// </summary>
        private CancellationTokenSource cancelSource;

        /// <summary>
        /// Gets or sets the Endpoint.
        /// </summary>
        public IPEndPoint Endpoint { get; set; }

        /// <summary>
        /// Defines the separator.
        /// </summary>
        private string separator;

        /// <summary>
        /// Defines the writer.
        /// </summary>
        private StreamWriter writer;

        /// <summary>
        /// Defines the reader.
        /// </summary>
        private StreamReader reader;

        /// <summary>
        /// Defines the minSendDelay.
        /// </summary>
        private readonly int minSendDelay = 40;

        /// <summary>
        /// Gets or sets a value indicating whether Connected.
        /// </summary>
        public bool Connected { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether EnableReceive.
        /// </summary>
        public bool EnableReceive { get; set; } = true;

        /// <summary>
        /// Gets or sets a value indicating whether EnableSend.
        /// </summary>
        public bool EnableSend { get; set; } = true;

        /// <summary>
        /// Defines the OnMessageReceived.
        /// </summary>
        public event EventHandler<string> OnMessageReceived;

        /// <summary>
        /// Defines the OnDisconnected.
        /// </summary>
        public event EventHandler<TcpCoreStringClient> OnDisconnected;
        /// <summary>
        /// Defines the OnConnected.
        /// </summary>
        public event EventHandler<TcpCoreStringClient> OnConnected;

        /// <summary>
        /// Get the latest network communication message
        /// </summary>
        /// <returns>String representation (hexadecimal) of latest network communication message</returns>
        public List<string> GetLatestMessages() {
            List<string> messages = null;
            lock (latestMessageLocker) {
                messages = new List<string>(this.latestMessages.ToArray());
                this.latestMessages.Clear();
            }

            return messages;
        }

        /// <summary>
        /// The Start.
        /// </summary>
        /// <param name="endPoint">The endPoint<see cref="EndPoint"/>.</param>
        /// <param name="separator">The separator<see cref="string"/>.</param>
        public void Start(EndPoint endPoint, string separator) {
            this.Endpoint = endPoint as IPEndPoint;
            this.separator = separator;
            this.cancelSource = new CancellationTokenSource();
            this.receiveTask = Task.Factory.StartNew(this.ReceiveLoop);
            this.sendTask = Task.Factory.StartNew(this.SendLoop);
        }

        /// <summary>
        /// The SendLoop.
        /// </summary>
        private void SendLoop() {
            Thread.CurrentThread.Name = "TcpCoreStringClient SendLoop " + Endpoint;
            while (this.cancelSource != null && !this.cancelSource.IsCancellationRequested) {
                this.sendResetEvent.WaitOne();
                while (this.sendQueue.Count > 0) {
                    if (this.sendQueue.TryDequeue(out string command)) {
                        try {
                            lock (this.sendLocker) {
                                this.writer.Write(command + this.separator);
                                this.writer.Flush();
                                string message = ("PelcoDec 2 => " + command);
                                this.AddToLatestMessage(message);
                                Log.Debug(message);
                            }
                            Thread.Sleep(this.minSendDelay);
                        }
                        catch (Exception ex) {
                            string log = "TcpCoreStringClient : Error when Process send Message " + ex.Message;
                            Log.Error(log);
                        }

                    }
                }
                Thread.Sleep(1);
            }
        }

        /// <summary>
        /// The Send.
        /// </summary>
        /// <param name="data">The data<see cref="string"/>.</param>
        /// <returns>The <see cref="bool"/>.</returns>
        public bool Send(string data) {
            if (this.writer != null && this.Connected && EnableSend) {
                this.sendQueue.Enqueue(data);
                this.sendResetEvent.Set();
                return true;
            }

            return false;
        }

        /// <summary>
        /// The ReceiveLoop.
        /// </summary>
        private void ReceiveLoop() {
            Thread.CurrentThread.Name = "TcpCoreStringClient ReceiveLoop " + Endpoint;
            if (this.cancelSource == null) return;
            while (!this.cancelSource.IsCancellationRequested) {
                this.Connected = this.TryConnect();
                if (this.Connected) {
                    this.OnConnected?.Invoke(this, this);
                    try {
                        this.ReceiveLoopProcess();
                    }
                    catch (Exception ex) {
                        string log = "TcpCoreStringClient can't connect " + ex.Message;
                        Log.Warning(log);
                    }
                }
                this.Client = null;
                if (this.Connected && this.OnDisconnected != null) {
                    this.OnDisconnected(this, this);
                }
                this.Connected = false;
                this.cancelSource.Token.WaitHandle.WaitOne(500);


            }
        }

        /// <summary>
        /// The ReceiveLoopProcess.
        /// </summary>
        private void ReceiveLoopProcess() {
            StringBuilder builder = new StringBuilder();
            using (NetworkStream networkStream = Client.GetStream()) {
                this.writer = new StreamWriter(networkStream);
                this.reader = new StreamReader(networkStream);
                while (!this.cancelSource.IsCancellationRequested) {
                    if (EnableReceive) {
                        this.TryRead(reader, builder);
                    }

                    this.cancelSource.Token.WaitHandle.WaitOne(2);
                }
            }
        }

        /// <summary>
        /// The TryConnect.
        /// </summary>
        /// <returns>The <see cref="bool"/>.</returns>
        private bool TryConnect() {
            try {
                if (this.Client == null) {
                    this.Client = new TcpClient();
                }
                if (!this.Client.Connected) {
                    this.Client.Connect(Endpoint);
                }

                return this.Client.Connected;
            }
            catch (Exception ex) {
                Log.Warning("Error when connect " + ex.Message);
                return false;
            }
        }

        /// <summary>
        /// The TryRead.
        /// </summary>
        /// <param name="reader">The reader<see cref="StreamReader"/>.</param>
        /// <param name="builder">The builder<see cref="StringBuilder"/>.</param>
        private void TryRead(StreamReader reader, StringBuilder builder) {
            char[] buffer = new char[4096];
            int charsRead = reader.Read(buffer, 0, buffer.Length);
            char[] result = new char[charsRead];
            Array.Copy(buffer, result, charsRead);
            string read = new string(result);
            if (!String.IsNullOrEmpty(read)) {
                builder.Append(read);
            }
            if (read.IndexOf(this.separator) != -1) {
                string content = builder.ToString();
                builder.Clear();
                List<string> msgs = content.ToString().Split(this.separator.ToCharArray(), StringSplitOptions.RemoveEmptyEntries).ToList();
                if (!content.EndsWith(this.separator)) {
                    builder.Append(msgs.Last());
                    msgs.RemoveAt(msgs.Count - 1);
                }
                foreach (string ms in msgs) {
                    try { this.OnMessageReceived?.Invoke(this, ms); }
                    catch (Exception ex) {
                        string log = "TcpStringClient : Error when Process Read Message " + ex.Message;
                        Log.Error(log);
                    }

                    string message = "PelcoDec 2 <= " + ms.Replace(this.separator, "");
                    Log.Verbose(message);
                    this.AddToLatestMessage(message);

                }
            }
        }

        /// <summary>
        /// The AddToLatestMessage.
        /// </summary>
        /// <param name="message">The message<see cref="string"/>.</param>
        private void AddToLatestMessage(string message) {

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
            if (this.cancelSource != null) this.cancelSource.Cancel();
            try { this.reader.Close(); }
            catch (Exception ex) { Log.Verbose("TcpCoreStringClient Ignorable reader.Close() error " + ex.Message); }
            try { this.writer.Close(); }
            catch (Exception ex) { Log.Verbose("TcpCoreStringClient Ignorable writer.Close() error " + ex.Message); }
            try { this.writer.Dispose(); }
            catch (Exception ex) { Log.Verbose("TcpCoreStringClient Ignorable writer.Dispose() error " + ex.Message); }
            try { this.reader.Dispose(); }
            catch (Exception ex) { Log.Verbose("TcpCoreStringClient Ignorable reader.Dispose() error " + ex.Message); }
            try { this.Client.Close(); }
            catch (Exception ex) { Log.Verbose("TcpCoreStringClient Ignorable Client.Close() error " + ex.Message); }
            try { this.Client.Dispose(); }
            catch (Exception ex) { Log.Verbose("TcpCoreStringClient Ignorable Client.Dispose() error " + ex.Message); }
        
            this.receiveTask = null;
            this.sendTask = null;
            this.reader = null;
            this.writer = null;
            this.Client = null;
            Log.Verbose("TCPCore String Client Stopped");
        }
    }
}
