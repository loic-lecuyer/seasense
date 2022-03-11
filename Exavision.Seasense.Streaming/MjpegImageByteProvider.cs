using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Shared.Streaming;
using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
namespace Exavision.Seasense.Streaming {
    public class MjpegImageByteProvider : IImageByteProvider {


        public MjpegImageByteProvider(string streamUrl) {
            this.Url = streamUrl;
        }


        /// <summary>
        /// Gets or sets the AutoReconnect.
        /// </summary>
        public Boolean AutoReconnect { get; set; } = true;

        /// <summary>
        /// Gets a value indicating whether HasError.
        /// </summary>
        public bool HasError { get; private set; }

        /// <summary>
        /// Gets or sets the Url.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Gets or sets the ImageBytesLocker.
        /// </summary>
        public Object ImageBytesLocker { get; set; } = new object();

        /// <summary>
        /// Defines the imageBytes.
        /// </summary>
        private byte[] imageBytes;

        /// <summary>
        /// Gets or sets the OnFrameRead.
        /// </summary>
        public Action<byte[]> OnFrameRead { get; set; }

        /// <summary>
        /// Gets or sets the OnError.
        /// </summary>
        public Action OnError { get; set; }

        /// <summary>
        /// Defines the JpegHeader.
        /// </summary>
        private readonly byte[] JpegHeader = new byte[] { 0xff, 0xd8 };

        /// <summary>
        /// Defines the JpegEnd.
        /// </summary>
        private readonly byte[] JpegEnd = new byte[] { 0xff, 0xd9 };

        /// <summary>
        /// Defines the DoubleCarretReturn.
        /// </summary>
        private readonly byte[] DoubleCarretReturn = new byte[] { (byte)13, (byte)10, (byte)13, (byte)10 };

        private readonly byte[] CarretReturn = new byte[] { (byte)13, (byte)10, };

        /// <summary>
        /// Defines the task.
        /// </summary>
        private Task task;

        /// <summary>
        /// Defines the canceller.
        /// </summary>
        private CancellationTokenSource canceller;

        /// <summary>
        /// Defines the frameErrorCount.
        /// </summary>
        private int frameErrorCount = 0;

        /// <summary>
        /// Gets or sets the BufferSize.
        /// </summary>
        public int BufferSize { get; set; } = 3000 * 2000 * 3 * 3;

        /// <summary>
        /// Gets or sets the DesiredFps.
        /// </summary>
        public int DesiredFps { get; set; } = 25;

        /// <summary>
        /// Defines the watchValidFrameTask.
        /// </summary>
        private Task watchValidFrameTask;

        /// <summary>
        /// Defines the hasFirstFrame.
        /// </summary>
        private bool hasFirstFrame = false;

        /// <summary>
        /// The Start.
        /// </summary>
        public void StartProvider() {
            this.stopping = false;
            this.hasFirstFrame = false;
            this.fpsTimer.Start();
            lastValidFrameTimer.Start();
            this.frameErrorCount = 0;
            this.canceller = new CancellationTokenSource();
            this.task = Task.Factory.StartNew(() => { this.Loop(); }, this.canceller.Token);
            this.watchValidFrameTask = Task.Factory.StartNew(() => { this.WatchValidFrame(); }, this.canceller.Token);
        }

        /// <summary>
        /// The WatchValidFrame.
        /// </summary>
        private void WatchValidFrame() {
            Thread.CurrentThread.Name = "MjpegReader WatchValidFrame Loop " + this.Url;
            while (!this.canceller.IsCancellationRequested) {


                if (this.hasFirstFrame && this.lastValidFrameTimer.Elapsed.TotalSeconds > 1 && this.AutoReconnect && !this.stopping) {
                    Log.Warning("MjpegReader : Hardware no send frame from 1 second but Keep copnnection open => start stop ");
                    this.StopProvider();
                    this.StartProvider();
                }

                this.canceller.Token.WaitHandle.WaitOne(500);
            }
        }

        /// <summary>
        /// Defines the request.
        /// </summary>
        internal HttpWebRequest request = null;

        /// <summary>
        /// Defines the response.
        /// </summary>
        internal WebResponse response = null;

        /// <summary>
        /// Defines the fpsTimer.
        /// </summary>
        private readonly Stopwatch fpsTimer = new Stopwatch();

        /// <summary>
        /// Defines the lastValidFrameTimer.
        /// </summary>
        private readonly Stopwatch lastValidFrameTimer = new Stopwatch();

        /// <summary>
        /// Gets the CurrentFps.
        /// </summary>
        public double CurrentFps { get; private set; } = 0;

        /// <summary>
        /// The Loop.
        /// </summary>
        private void Loop() {
            Thread.CurrentThread.Name = "MjpegReader Loop " + this.Url;
            fpsTimer.Restart();
            this.HasError = false;
            Stream stream;
            string log;
            while (!this.canceller.IsCancellationRequested) {

                try {
                    if (this.request == null) this.request = this.CreateHttpWebRequest(this.Url);
                    this.HasError = false;
                    response = request.GetResponse();
                    stream = response.GetResponseStream();
                    Log.Verbose("MjpegReader GetResponseStream Ok");
                    this.LoopJpeg(stream);

                }
                catch (Exception ex) {
                    this.HasError = true;
                    log = "MjpegReader : Error when connection to Mjpeg Server " + this.Url + " ( " + ex.Message + " )";
                    Log.Warning(log);
                    this.CloseRequest();
                    this.CloseResponse();
                    this.canceller.Token.WaitHandle.WaitOne(2000);
                    fpsTimer.Stop();
                    lock (ImageBytesLocker) {
                        this.imageBytes = null;
                    }
                }
                if (!this.AutoReconnect) break;
            }
            Log.Information("MjpegReader Exit Loop ");
        }

        /// <summary>
        /// The LoopJpeg.
        /// TODO : Refactoring, pattern startegie
        /// </summary>
        /// <param name="stream">The stream<see cref="Stream"/>.</param>
        private void LoopJpeg(Stream stream) {
            int index = 1;
            while (!canceller.IsCancellationRequested) {
                // Plutot que de rechercher le début et la fin de la jpeg on vérifie si la content length est spécifié
                byte[] contentTypeBytes = System.Text.Encoding.ASCII.GetBytes("Content-Type: image/jpeg");

                byte[] contentLengthBytes = System.Text.Encoding.ASCII.GetBytes("Content-Length:");
                List<byte> datas = new List<byte>();
                byte[] buffer = new byte[BufferSize];
                byte[] readBytes = new byte[0];
                while (!canceller.IsCancellationRequested) {
                    try {
                        int read = stream.Read(buffer, 0, buffer.Length);
                        readBytes = new byte[read];
                        Array.Copy(buffer, readBytes, read);
                        datas.AddRange(readBytes);
                        byte[] dataArray = datas.ToArray();
                        int contentTypeBytesIndex = datas.Find(contentTypeBytes);
                        int contentLengthBytesIndex = datas.Find(contentLengthBytes);
                        int contentLength = -1;
                        if (contentLengthBytesIndex != -1) {
                            int contentLengthStartSearch = contentLengthBytesIndex + contentLengthBytes.Length;
                            int carretReturnPos = datas.Find(contentLengthStartSearch, CarretReturn);
                            if (carretReturnPos != -1) {
                                int contentLenthLength = carretReturnPos - contentLengthStartSearch;
                                byte[] contentLengthByte = new byte[contentLenthLength];
                                Array.Copy(dataArray, contentLengthStartSearch, contentLengthByte, 0, contentLenthLength);
                                string contentLengthText = System.Text.Encoding.ASCII.GetString(contentLengthByte);
                                if (Int32.TryParse(contentLengthText, out int length)) {
                                    contentLength = length;
                                }
                            }
                        }
                        if (contentTypeBytesIndex != -1) {
                            int startSearchJpegHeader = contentTypeBytesIndex + contentTypeBytes.Length;
                            int jpegHeaderPos = datas.Find(startSearchJpegHeader, JpegHeader);
                            if (jpegHeaderPos != -1) {
                                if (contentLength != -1 && dataArray.Length >= (jpegHeaderPos + contentLength)) {
                                    byte[] jpeg = new byte[contentLength];
                                    Array.Copy(dataArray, jpegHeaderPos, jpeg, 0, contentLength);
                                    lock (ImageBytesLocker) {
                                        this.imageBytes = jpeg;

                                    }

                                    datas.RemoveRange(0, jpegHeaderPos + contentLength);

                                }
                                else {
                                    int startSearchJpegEnd = jpegHeaderPos + JpegHeader.Length;
                                    int jpegEndPos = datas.Find(startSearchJpegEnd, JpegEnd);

                                    if (jpegEndPos != -1) {
                                        int jpegLength = jpegEndPos - jpegHeaderPos;
                                        byte[] jpeg = new byte[jpegLength];
                                        Array.Copy(dataArray, jpegHeaderPos, jpeg, 0, jpegLength);
                                        lock (ImageBytesLocker) {
                                            this.imageBytes = jpeg;

                                        }
                                        //Log.Information("Extract jpeg by Tag");
                                        datas.RemoveRange(0, jpegEndPos + JpegEnd.Length);
                                    }
                                }

                            }
                        }
                        else if (contentLength != -1) {
                            int startSearchJpegHeader = contentTypeBytesIndex + contentTypeBytes.Length;
                            int jpegHeaderPos = datas.Find(startSearchJpegHeader, JpegHeader);
                            byte[] jpeg = new byte[contentLength];
                            Array.Copy(dataArray, jpegHeaderPos, jpeg, 0, contentLength);
                            lock (ImageBytesLocker) {
                                this.imageBytes = jpeg;

                            }
                            //Log.Information("Extract jpeg by content length");
                            datas.RemoveRange(0, jpegHeaderPos + contentLength);
                        }
                        if (datas.Count > BufferSize * 10) {
                            datas.Clear();
                        }
                        canceller.Token.WaitHandle.WaitOne(this.DesiredFps / 1000);
                    }
                    catch (Exception ex) {
                        this.frameErrorCount++;
                        Log.Warning("MjpegReader : Error when read frame ( " + ex.Message + " )");
                        if (this.frameErrorCount > 10) {
                            try { response.Close(); }
                            catch (Exception exClose) {
                                Log.Information("Error when Close Mjpeg Reader " + exClose.Message);
                            }
                            break;
                        }
                    }
                }
            }
            this.CloseResponse();
            this.CloseRequest();

        }
        /// <summary>
        /// The LoopJpeg.
        /// TODO : Refactoring, pattern startegie
        /// </summary>
        /// <param name="stream">The stream<see cref="Stream"/>.</param>
        private void LoopJpegSpan(Stream stream) {
            while (!canceller.IsCancellationRequested) {
                // Plutot que de rechercher le début et la fin de la jpeg on vérifie si la content length est spécifié
                byte[] contentTypeBytes = System.Text.Encoding.ASCII.GetBytes("Content-Type: image/jpeg");
                byte[] contentLengthBytes = System.Text.Encoding.ASCII.GetBytes("Content-Length:");
                byte[] buffer = new byte[BufferSize];
                Span<byte> span = new Span<byte>(buffer);
                int index = 0;
                while (!canceller.IsCancellationRequested) {
                    try {
                        int read = stream.Read(span.Slice(index));
                        index += read;
                        if (index >= span.Length) {
                            index = 0;
                            span.Fill(0);
                            Log.Warning("End of cicular buffer !!! reset ...");
                        }

                        int contentTypeBytesIndex = span.IndexOf(contentTypeBytes);
                        int contentLengthBytesIndex = span.IndexOf(contentLengthBytes);
                        int contentLength = -1;
                        if (contentLengthBytesIndex != -1) {
                            int contentLengthStartSearch = contentLengthBytesIndex + contentLengthBytes.Length;
                            int carretReturnPos = span.Slice(contentLengthStartSearch).IndexOf(CarretReturn) + contentLengthStartSearch;
                            if (carretReturnPos != -1) {
                                int contentLenthLength = carretReturnPos - contentLengthStartSearch;
                                byte[] contentLengthByte = new byte[contentLenthLength];
                                Span<byte> contentLengthByteSpan = new Span<byte>(contentLengthByte);
                                span.Slice(contentLengthStartSearch).CopyTo(contentLengthByteSpan);
                                string contentLengthText = System.Text.Encoding.ASCII.GetString(span.ToArray());
                                if (Int32.TryParse(contentLengthText, out int length)) {
                                    contentLength = length;
                                }
                            }
                        }
                        if (contentTypeBytesIndex != -1) {
                            int startSearchJpegHeader = contentTypeBytesIndex + contentTypeBytes.Length;
                            int jpegHeaderPos = span.Slice(startSearchJpegHeader).IndexOf(JpegHeader) + startSearchJpegHeader;
                            if (jpegHeaderPos != -1) {
                                if (contentLength != -1 && span.Length >= (jpegHeaderPos + contentLength)) {
                                    byte[] jpeg = new byte[contentLength];
                                    span.Slice(jpegHeaderPos, contentLength).CopyTo(jpeg);

                                    lock (ImageBytesLocker) {
                                        this.imageBytes = jpeg;
                                    }
                                    span.Slice(jpegHeaderPos + contentLength).CopyTo(span);
                                    index = 0;
                                    span.Slice(jpegHeaderPos + contentLength).Fill(0);
                                }
                                else {
                                    int startSearchJpegEnd = jpegHeaderPos + JpegHeader.Length;
                                    int jpegEndPos = span.Slice(startSearchJpegEnd).IndexOf(JpegEnd) + startSearchJpegEnd;

                                    if (jpegEndPos != -1) {
                                        int jpegLength = jpegEndPos - jpegHeaderPos;
                                        byte[] jpeg = new byte[jpegLength];
                                        span.Slice(jpegHeaderPos, jpegLength).CopyTo(jpeg);

                                        lock (ImageBytesLocker) {
                                            this.imageBytes = jpeg;
                                        }
                                        span.Slice(jpegHeaderPos + contentLength).CopyTo(span);
                                        index = 0;
                                        span.Slice(jpegHeaderPos + contentLength).Fill(0);
                                    }
                                }

                            }
                        }

                        canceller.Token.WaitHandle.WaitOne(1);
                    }
                    catch (Exception ex) {
                        this.frameErrorCount++;
                        Log.Warning("MjpegReader : Error when read frame ( " + ex.Message + " )");
                        if (this.frameErrorCount > 10) {
                            try { response.Close(); }
                            catch (Exception exClose) {
                                Log.Information("Error when Close Mjpeg Reader " + exClose.Message);
                            }
                            break;
                        }
                    }
                }
            }
            this.CloseResponse();
            this.CloseRequest();

        }

        /// <summary>
        /// The CloseResponse.
        /// </summary>
        private void CloseResponse() {
            try { response?.Close(); } catch (Exception exSub) { Log.Verbose("MjpegReader  response?.Close() Ignorable error " + exSub.Message); }
            try { response?.Dispose(); } catch (Exception exSub) { Log.Verbose("MjpegReader response?.Dispose() Ignorable error " + exSub.Message); }

            this.response = null;
        }

        /// <summary>
        /// The CloseRequest.
        /// </summary>
        private void CloseRequest() {
            try { this.request?.Abort(); } catch (Exception exSub) { Log.Verbose("MjpegReader .request?.Abort() Ignorable error " + exSub.Message); }
            this.request = null;
        }

        /// <summary>
        /// The CreateHttpWebRequest.
        /// </summary>
        /// <param name="url">The url<see cref="string"/>.</param>
        /// <returns>The <see cref="HttpWebRequest"/>.</returns>
        private HttpWebRequest CreateHttpWebRequest(string url) {
            HttpWebRequest requestInstance;
            if (url.IndexOf("@") != -1) {
                Log.Verbose("MjpegReader Login/Password detected  => use Digest authentification");
                string login = url.Substring(url.IndexOf("://") + 3);
                login = login.Substring(0, login.IndexOf(":"));
                string password = url.Substring(url.IndexOf("://") + 3);
                password = password.Substring(password.IndexOf(":") + 1);
                password = password.Substring(0, password.IndexOf("@"));
                string safeUrl = url.Replace((login + ":" + password) + "@", "");
                Uri uri = new Uri(safeUrl);
                var credentialCache = new CredentialCache
                        {
                            {
                                new Uri(uri.GetLeftPart(UriPartial.Authority)),
                                "Digest",
                                new NetworkCredential(login, password)
                            }
                        };
                requestInstance = (HttpWebRequest)WebRequest.Create(uri);
                requestInstance.Credentials = credentialCache;

            }
            else {
                requestInstance = (HttpWebRequest)WebRequest.Create(url);
            }
            return requestInstance;
        }

        /// <summary>
        /// Defines the stopping.
        /// </summary>
        private bool stopping = false;

        /// <summary>
        /// The Stop.
        /// </summary>
        public void StopProvider() {
            this.stopping = true;
            this.hasFirstFrame = false;
            this.lastValidFrameTimer.Stop();
            this.fpsTimer?.Stop();
            this.canceller?.Cancel();
            try { this.request?.Abort(); } catch (Exception ex) { Log.Verbose("MjpegReader request.Abort() Ignorable error " + ex.Message); }
            try { this.response?.Close(); } catch (Exception ex) { Log.Verbose("MjpegReader response.Close() Ignorable error " + ex.Message); }
            try { this.response?.Dispose(); } catch (Exception ex) { Log.Verbose("MjpegReader response.Dispose() Ignorable error " + ex.Message); }

            if (this.task != null &&
                this.task.Status == TaskStatus.Running) this.task.Wait();

            if (this.watchValidFrameTask != null &&
                this.watchValidFrameTask.Status == TaskStatus.Running) this.watchValidFrameTask.Wait();

            this.stopping = false;
        }

        /// <summary>
        /// The GetImageBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] GetImageBytes() {
            byte[] result = null;
            lock (ImageBytesLocker) {
                if (this.imageBytes != null) {
                    result = new byte[this.imageBytes.Length];
                    Array.Copy(imageBytes, result, this.imageBytes.Length);
                }
            }
            return result;

        }


    }

}
