using Exavision.Seasense.Shared.Streaming;
using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

public class MjpegServer {
    /// <summary>
    /// Defines the ip.
    /// </summary>
    private readonly IPAddress ip;

    /// <summary>
    /// Defines the port.
    /// </summary>
    private readonly ushort port;

    /// <summary>
    /// Gets or sets the DesiredFPS.
    /// </summary>
    public Nullable<int> DesiredFPS { get; set; } = null;

    /// <summary>
    /// Gets or sets a value indicating whether RemovePreviousClientWithSameIp.
    /// </summary>
    public bool RemovePreviousClientWithSameIp { get; set; } = false;

    /// <summary>
    /// Defines the provider.
    /// </summary>
    private readonly IImageByteProvider provider;

    /// <summary>
    /// Defines the serverTask.
    /// </summary>
    private Task serverTask;

    /// <summary>
    /// Defines the imageTask.
    /// </summary>
    private Task imageTask;

    /// <summary>
    /// Defines the _clients.
    /// </summary>
    private readonly List<MjpegServerClient> _clients = new List<MjpegServerClient>();

    /// <summary>
    /// Defines the _clientsLocker.
    /// </summary>
    private readonly object _clientsLocker = new object();

    /// <summary>
    /// Initializes a new instance of the <see cref="MjpegServer"/> class.
    /// </summary>
    /// <param name="ip">The ip<see cref="IPAddress"/>.</param>
    /// <param name="port">The port<see cref="ushort"/>.</param>
    /// <param name="provider">The provider<see cref="IImageBytesProvider"/>.</param>
    public MjpegServer(IPAddress ip, ushort port, IImageByteProvider provider) {
        this.ip = ip;
        this.port = port;
        this.provider = provider;
    }
    public static string CreateMjpegHttpStart() {
        StringBuilder builder = new StringBuilder();
        builder.Clear();
        builder.Append("HTTP/1.0 200 OK\r\n");
        builder.Append("Server: MjpegServer\r\n");
        builder.Append("Max-Age: 0\r\n");
        builder.Append("Expires: 0\r\n");
        builder.Append("Cache-Control: no-cache, private\r\n");
        builder.Append("Pragma: no-cache\r\n");
        builder.Append("Content-Type: multipart/x-mixed-replace; boundary=--BoundaryString\r\n\r\n");
        return builder.ToString();
    }
    /// <summary>
    /// Defines the canceller.
    /// </summary>
    private CancellationTokenSource canceller;

    /// <summary>
    /// Defines the token.
    /// </summary>
    private CancellationToken token;

    /// <summary>
    /// The Start.
    /// </summary>
    public void Start() {

        this.canceller = new CancellationTokenSource();
        this.token = this.canceller.Token;
        this.serverTask = Task.Factory.StartNew(Listen, this.token);
        this.imageTask = Task.Factory.StartNew(GrabImage, this.token);
    }

    /// <summary>
    /// Defines the imageBytesLocker.
    /// </summary>
    private readonly object imageBytesLocker = new object();

    /// <summary>
    /// Defines the imageBytes.
    /// </summary>
    private byte[] imageBytes;

    /// <summary>
    /// The GrabImage.
    /// </summary>
    private void GrabImage() {
        Thread.CurrentThread.Name = "MjpegServer GrabImage " + this.port;
        Stopwatch watcher = new Stopwatch();
        watcher.Start();
        double fps = 25;
        if (this.DesiredFPS.HasValue) {
            fps = this.DesiredFPS.Value;
        }
        double msPerLoop = 1000D / fps;
        while (!this.token.IsCancellationRequested) {
            try {

                if (this.provider != null) {
                    lock (imageBytesLocker) {
                        this.imageBytes = this.provider.GetImageBytes();
                    }
                }

                lock (this._clientsLocker) {
                    this._clients.ForEach((MjpegServerClient cli) =>
                    {
                        cli.SetImageBytes(this.imageBytes);
                    });
                }

                int deltaMs = (int)Math.Max(1, msPerLoop - watcher.Elapsed.TotalMilliseconds);
                Thread.Sleep(deltaMs);
                watcher.Restart();
            } catch (Exception ex) {
                Log.Error("MjpegServer Error " + ex.Message);

            }

        }
    }

    /// <summary>
    /// The Stop.
    /// </summary>
    public void Stop() {
        Log.Information("Mjpeg Server Stopping ...");
        this.canceller.Cancel();
        if (this.imageTask != null && this.imageTask.Status == TaskStatus.Running) {
            this.imageTask.Wait();
        }

        lock (this._clientsLocker) {
            this._clients.ForEach((MjpegServerClient cli) =>
            {
                cli.Stop();
            });
            this._clients.Clear();
        }

        try { this.serverSocket.Shutdown(SocketShutdown.Both); } catch (Exception ex) { Log.Verbose("MjpegServer serverSocket.Shutdown Ignorable error " + ex.Message); }
        try { this.serverSocket.Close(); } catch (Exception ex) { Log.Verbose("MjpegServer serverSocket.Close Ignorable error " + ex.Message); }
        try { this.serverSocket.Dispose(); } catch (Exception ex) { Log.Verbose("MjpegServer serverSocket.Dispose Ignorable error " + ex.Message); }
        if (this.serverTask != null && this.serverTask.Status == TaskStatus.Running) {
            this.serverTask.Wait();
        }
        Log.Information("Mjpeg Server Stopped");
    }

    /// <summary>
    /// Defines the serverSocket.
    /// </summary>
    private Socket serverSocket;

    /// <summary>
    /// The Listen.
    /// </summary>
    private void Listen() {
        IPEndPoint endPoint = new IPEndPoint(this.ip, this.port);
        Thread.CurrentThread.Name = "MjpegServer Listen " + endPoint;
        while (!this.token.IsCancellationRequested) {
            try {
                this.serverSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                this.serverSocket.Bind(endPoint);
                this.serverSocket.Listen(100);
                Log.Information("MjpegServer : server started on " + endPoint);
                while (!this.token.IsCancellationRequested) {
                    Socket clientSocket = this.serverSocket.Accept();
                    if (this.RemovePreviousClientWithSameIp) {
                        // Stop et remove des clients ayant la même Remote IP, un seul flux utilisé par ip
                        List<MjpegServerClient> clientToRemoves = new List<MjpegServerClient>();

                        _clients.ForEach((MjpegServerClient cli) =>
                        {
                            if ((cli.ClientSocket.RemoteEndPoint as IPEndPoint).Address.Equals((clientSocket.RemoteEndPoint as IPEndPoint).Address)) {
                                cli.Stop();
                                clientToRemoves.Add(cli);
                            }
                        });
                        clientToRemoves.ForEach((MjpegServerClient cli) =>
                        {
                            lock (_clientsLocker) { _clients.Remove(cli); }

                        });
                    }
                    MjpegServerClient client = new MjpegServerClient(clientSocket) {
                        DesiredFPS = this.DesiredFPS
                    };
                    lock (_clientsLocker) {
                        _clients.Add(client);
                    }
                    Log.Information("MjpegServer : Mjpeg Client connected, count clients " + _clients.Count);
                    client.Disconnected += this.Client_Disconnected;
                    client.Start();
                }
                this.serverSocket.Shutdown(SocketShutdown.Both);
                this.serverSocket.Dispose();


            } catch (Exception ex) {
                Log.Warning("MjpegServer : Error when running " + ex.Message);

            }

        }
    }

    /// <summary>
    /// The Client_Disconnected.
    /// </summary>
    /// <param name="sender">The sender<see cref="object"/>.</param>
    /// <param name="e">The e<see cref="MjpegServerClient"/>.</param>
    private void Client_Disconnected(object sender, MjpegServerClient e) {
        e.Disconnected -= this.Client_Disconnected;
        lock (_clientsLocker) { this._clients.Remove(e); }
        Log.Information("MjpegServer : Mjpeg Client disconnected, count clients " + _clients.Count);
    }
}

