namespace Exavision.Seasense.Core.Network {
    using global::System;
    using global::System.Collections.Generic;
    using global::System.Net;
    using global::System.Net.Sockets;
    using global::System.Threading;
    using global::System.Threading.Tasks;
    using Serilog;

    /// <summary>
    /// Defines the <see cref="TcpCoreStringServer" />.
    /// </summary>
    public class TcpCoreStringServer
    {
        /// <summary>
        /// Defines the task.
        /// </summary>
        private Task task;

        /// <summary>
        /// Defines the server.
        /// </summary>
        private TcpListener server;

        /// <summary>
        /// Defines the clients.
        /// </summary>
        private readonly List<TcpCoreStringClient> clients = new List<TcpCoreStringClient>();

        /// <summary>
        /// Defines the OnMessageReceived.
        /// </summary>
        public event EventHandler<Tuple<TcpCoreStringClient, string>> OnMessageReceived;

        /// <summary>
        /// Defines the cancelSource.
        /// </summary>
        private CancellationTokenSource cancelSource;

        /// <summary>
        /// Defines the endPoint.
        /// </summary>
        private EndPoint endPoint;

        /// <summary>
        /// Defines the separator.
        /// </summary>
        private string separator;

        /// <summary>
        /// Initializes a new instance of the <see cref="TcpCoreStringServer"/> class..
        /// </summary>
        private readonly Object clientsLocker = new object();

        /// <summary>
        /// Initializes a new instance of the <see cref="TcpCoreStringServer"/> class.
        /// </summary>
        public TcpCoreStringServer()
        {
        }

        /// <summary>
        /// The Start.
        /// </summary>
        /// <param name="endPoint">The endPoint<see cref="EndPoint"/>.</param>
        /// <param name="separator">The separator<see cref="string"/>.</param>
        public void Start(EndPoint endPoint, string separator)
        {
            this.endPoint = endPoint;
            this.separator = separator;
            this.cancelSource = new CancellationTokenSource();
            this.task = Task.Factory.StartNew(this.Listen, this.cancelSource.Token);
        }

        /// <summary>
        /// The Listen.
        /// </summary>
        private void Listen()
        {
            Thread.CurrentThread.Name = "TcpCoreStringServer Listen " + this.endPoint;
            this.server = new TcpListener(this.endPoint as IPEndPoint);
            this.server.Start();

            string log = "TcpStringClient connecting to " + this.endPoint.ToString() + " ...";
            Log.Verbose(log);

            while (!this.cancelSource.IsCancellationRequested)
            {
                try
                {
                    TcpClient tcpClient = this.server.AcceptTcpClient();

                    TcpCoreStringClient client = new TcpCoreStringClient
                    {
                        Client = tcpClient,
                        Endpoint = tcpClient.Client.RemoteEndPoint as IPEndPoint

                    };

                    client.OnMessageReceived += Client_OnMessageReceived;
                    client.OnDisconnected += Client_OnDisconnected;
                    lock (clientsLocker)
                    { this.clients.Add(client); }

                    client.Start(null, this.separator);
                }
                catch (Exception ex)
                {
                    Log.Error("TcpStringClient Error when AcceptTcpClient " + ex.Message);
                }
                if (!this.cancelSource.IsCancellationRequested) this.cancelSource.Token.WaitHandle.WaitOne(500);


            }
        }

        /// <summary>
        /// The Client_OnDisconnected.
        /// </summary>
        /// <param name="sender">The sender<see cref="object"/>.</param>
        /// <param name="e">The e<see cref="TcpCoreStringClient"/>.</param>
        private void Client_OnDisconnected(object sender, TcpCoreStringClient e)
        {
            e.OnMessageReceived -= Client_OnMessageReceived;
            e.OnDisconnected -= Client_OnDisconnected;
            if (this.clients.Contains(e))
            {
                this.clients.Remove(e);
            }
            e.Stop();
        }

        /// <summary>
        /// The Client_OnMessageReceived.
        /// </summary>
        /// <param name="sender">The sender<see cref="object"/>.</param>
        /// <param name="e">The e<see cref="string"/>.</param>
        private void Client_OnMessageReceived(object sender, string e)
        {
            if (sender is TcpCoreStringClient && this.OnMessageReceived != null)
            {
                TcpCoreStringClient client = sender as TcpCoreStringClient;
                this.OnMessageReceived(this, new Tuple<TcpCoreStringClient, string>(client, e));
            }
        }

        /// <summary>
        /// The Stop.
        /// </summary>
        public void Stop()
        {
            lock (clientsLocker)
            {
                this.clients.ForEach((TcpCoreStringClient cli) =>
                {
                    cli.OnMessageReceived -= Client_OnMessageReceived;
                    cli.OnDisconnected -= Client_OnDisconnected;
                    cli.Stop();
                });

            }

            this.clients.Clear();
            try { this.server?.Stop(); } catch (Exception ex) { Log.Verbose("TcpCoreStringServer Ingorable error " + ex.Message); }
            if (this.cancelSource != null) this.cancelSource.Cancel();     
            this.task = null;
            this.server = null;
        }

        /// <summary>
        /// The Send.
        /// </summary>
        /// <param name="data">The data<see cref="string"/>.</param>
        public void Send(string data)
        {
            lock (clientsLocker)
            {
                this.clients.ForEach((TcpCoreStringClient cli) =>
                {
                    cli.Send(data);
                });
            }
        }
    }
}
