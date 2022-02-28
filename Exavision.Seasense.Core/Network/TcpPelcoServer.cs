namespace Exavision.Seasense.Core.Network {
    using global::System;
    using global::System.Collections.Generic;
    using global::System.Net;
    using global::System.Net.Sockets;
    using global::System.Threading;
    using global::System.Threading.Tasks;
    using Serilog;

    /// <summary>
    /// Defines the <see cref="TcpPelcoServer" />.
    /// </summary>
    public class TcpPelcoServer {
        /// <summary>
        /// Defines the task.
        /// </summary>
        private Task task;

        /// <summary>
        /// Defines the clients.
        /// </summary>
        private readonly List<TcpPelcoClient> clients = new List<TcpPelcoClient>();

        /// <summary>
        /// Defines the OnMessageReceived.
        /// </summary>
        public event EventHandler<Tuple<TcpPelcoClient, byte[]>> OnMessageReceived;

        /// <summary>
        /// Defines the cancelSource.
        /// </summary>
        private CancellationTokenSource cancelSource;

        /// <summary>
        /// Defines the endPoint.
        /// </summary>
        private EndPoint endPoint;

        /// <summary>
        /// Defines the server.
        /// </summary>
        private TcpListener server;

        /// <summary>
        /// Initializes a new instance of the <see cref="TcpPelcoServer"/> class.
        /// </summary>
        public TcpPelcoServer() {
        }

        /// <summary>
        /// The Start.
        /// </summary>
        /// <param name="endPoint">The endPoint<see cref="EndPoint"/>.</param>
        public void Start(EndPoint endPoint) {
            this.endPoint = endPoint;

            this.cancelSource = new CancellationTokenSource();
            this.task = Task.Factory.StartNew(this.Listen, this.cancelSource.Token);
        }

        /// <summary>
        /// The Listen.
        /// </summary>
        private void Listen() {
            Thread.CurrentThread.Name = "TcpPelcoServer LoopSend " + this.endPoint;
            this.server = new TcpListener(this.endPoint as IPEndPoint);
            this.server.Start();

            string log = "TcpPelcoServer connecting to " + this.endPoint.ToString() + " ...";
            Log.Verbose(log);

            while (!this.cancelSource.IsCancellationRequested) {
                try {
                    TcpClient tcpClient = server.AcceptTcpClient();
                    TcpPelcoClient client = new TcpPelcoClient {
                        Client = tcpClient
                    };
                    client.OnMessageReceived += Client_OnMessageReceived;
                    this.clients.Add(client);
                    client.Start(null);
                }
                catch (Exception ex) {
                    Log.Warning("Error when AcceptTcpClient " + ex.Message);

                }
                if (!this.cancelSource.IsCancellationRequested) {
                    this.cancelSource.Token.WaitHandle.WaitOne(500);
                }

            }
        }

        /// <summary>
        /// Handle OnMessageReceived event of TcpByteClient
        /// </summary>
        /// <param name="sender">TcpByteClient</param>
        /// <param name="e">Readed byte array from TcpbyteClient</param>
        private void Client_OnMessageReceived(object sender, byte[] e) {
            if (sender is TcpPelcoClient && this.OnMessageReceived != null) {
                TcpPelcoClient client = sender as TcpPelcoClient;
                this.OnMessageReceived(this, new Tuple<TcpPelcoClient, byte[]>(client, e));
            }
        }

        /// <summary>
        /// The Stop.
        /// </summary>
        public void Stop() {
            this.clients.ForEach((TcpPelcoClient cli) => {
                cli.Stop();
            });
            try {
                this.server.Stop();
            }
            catch (Exception ex) {
                Log.Warning("Error when close Server " + ex.Message);
            }
            this.server = null;
            if (this.cancelSource != null) this.cancelSource.Cancel();
            if (this.task != null && this.task.Status == TaskStatus.Running) this.task.Wait();
        }

        /// <summary>
        /// Send byte array message to all clien conneced to server
        /// </summary>
        /// <param name="data">Byte array message to send</param>
        public void Send(byte[] data) {
            this.clients.ForEach((TcpPelcoClient cli) => {
                cli.Send(data);
            });
        }
    }
}
