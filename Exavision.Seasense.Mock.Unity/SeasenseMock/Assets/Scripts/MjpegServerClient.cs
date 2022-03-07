using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

public class MjpegServerClient {
    /// <summary>
    /// Defines the writer.
    /// </summary>
    private readonly Stream writer;

    /// <summary>
    /// Defines the imageBytesLocker.
    /// </summary>
    private readonly Object imageBytesLocker = new object();

    /// <summary>
    /// Gets or sets the DesiredFPS.
    /// </summary>
    public Nullable<int> DesiredFPS { get; set; } = 25;

    /// <summary>
    /// Gets the ClientSocket.
    /// </summary>
    public Socket ClientSocket {
        get {
            return clientSocket;
        }
    }

    /// <summary>
    /// Defines the Disconnected.
    /// </summary>
    public event EventHandler<MjpegServerClient> Disconnected;

    /// <summary>
    /// Defines the clientSocket.
    /// </summary>
    private readonly Socket clientSocket;

    /// <summary>
    /// Defines the clientTask.
    /// </summary>
    private Task clientTask;

    /// <summary>
    /// Defines the canceller.
    /// </summary>
    private CancellationTokenSource canceller;

    /// <summary>
    /// Initializes a new instance of the <see cref="MjpegServerClient"/> class.
    /// </summary>
    /// <param name="clientSocket">The clientSocket<see cref="Socket"/>.</param>
    public MjpegServerClient(Socket clientSocket) {
        this.clientSocket = clientSocket;
        this.writer = new NetworkStream(this.clientSocket);
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="MjpegServerClient"/> class.
    /// </summary>
    /// <param name="clientStream">The clientStream<see cref="Stream"/>.</param>
    public MjpegServerClient(Stream clientStream) {

        this.writer = clientStream;
    }

    /// <summary>
    /// Defines the token.
    /// </summary>
    private CancellationToken token;

    /// <summary>
    /// The Start.
    /// </summary>
    internal void Start() {

        this.canceller = new CancellationTokenSource();
        this.token = this.canceller.Token;
        this.clientTask = Task.Factory.StartNew(Send, token);
    }

    /// <summary>
    /// Defines the imageDatas.
    /// </summary>
    private byte[] imageDatas = null;

    /// <summary>
    /// The Send.
    /// </summary>
    private void Send() {
        try {
            Thread.CurrentThread.Name = "MjpegServerClient " + this.ClientSocket.RemoteEndPoint;
            Stopwatch fpsWatcher = new Stopwatch();
            string mjpegLengthPattern = "--BoundaryString\r\nContent-type: image/jpeg\r\nContent-Length: {0}\r\n\r\n";
            int msPerImage = this.ComputeMsPerImage();
            List<byte> datas = new List<byte>();
            string mjpegHttpStart = MjpegServer.CreateMjpegHttpStart();
            byte[] data = Encoding.ASCII.GetBytes(mjpegHttpStart.ToString());

            this.writer.WriteAsync(data, 0, data.Length, this.token);
            this.writer.FlushAsync(this.token);
            byte[] doubleCarretReturnBytes = Encoding.ASCII.GetBytes("\r\n\r\n");
            fpsWatcher.Start();
            bool isFirstFrame = true;
            int waitMs = 0;
            while (!this.token.IsCancellationRequested) {
                if (!this.IsSocketConnected(ClientSocket)) throw new ArgumentException("Socket is disconnected");

                if (imageDatas != null) {
                    datas.Clear();
                    datas.AddRange(Encoding.ASCII.GetBytes(string.Format(mjpegLengthPattern, imageDatas.Length)));
                    datas.AddRange(imageDatas);
                    datas.AddRange(doubleCarretReturnBytes);
                    byte[] sendDatas = datas.ToArray();
                    this.writer.WriteAsync(sendDatas, 0, sendDatas.Length, this.token);
                    this.writer.FlushAsync(this.token);
                }

                if (isFirstFrame) waitMs = msPerImage;
                else waitMs = (int)Math.Max(1, (msPerImage - fpsWatcher.Elapsed.TotalMilliseconds));

                this.token.WaitHandle.WaitOne(waitMs);


                isFirstFrame = false;
                fpsWatcher.Restart();

            }
        } catch (Exception ex) {
            Log.Warning("MjpegServerClient : Error " + ex.Message);
            this.Disconnected?.Invoke(this, this);
        }
    }

    /// <summary>
    /// The IsSocketConnected.
    /// </summary>
    /// <param name="socket">The socket<see cref="Socket"/>.</param>
    /// <returns>The <see cref="bool"/>.</returns>
    private bool IsSocketConnected(Socket socket) {
        if (!socket.Connected) return false;
        bool part1 = socket.Poll(1000, SelectMode.SelectWrite);
        return part1;
    }

    /// <summary>
    /// The CreateMjpegHttpStart.
    /// </summary>
    /// <returns>The <see cref="string"/>.</returns>


    /// <summary>
    /// The ComputeMsPerImage.
    /// </summary>
    /// <returns>The <see cref="int"/>.</returns>
    private int ComputeMsPerImage() {
        double msPerImage;
        if (this.DesiredFPS.HasValue) {
            msPerImage = 1000D / (double)DesiredFPS.Value;
        } else {
            msPerImage = 1000D / 25D;
        }
        return (int)msPerImage;
    }

    /// <summary>
    /// The SetImageBytes.
    /// </summary>
    /// <param name="imageBytes">The imageBytes<see cref="byte[]"/>.</param>
    internal void SetImageBytes(byte[] imageBytes) {
        lock (this.imageBytesLocker) {
            this.imageDatas = imageBytes;
        }
    }

    /// <summary>
    /// The Stop.
    /// </summary>
    public void Stop() {

        Log.Information("Mjpeg ServerClient Stopping ...");
        this.canceller.Cancel();
        if (this.clientTask != null && this.clientTask.Status == TaskStatus.Running) { this.clientTask.Wait(); }
        Log.Information("Mjpeg ServerClient Stopped ...");
        this.imageDatas = null;
    }
}

