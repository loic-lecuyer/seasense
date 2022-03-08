using Exavision.Seasense.Shared.Streaming;
using Microsoft.AspNetCore.Http;
using Serilog;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Processing;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Exavision.Seasense.Streaming {
    public class ImageByteStreamer : IImageByteStreamer {




        private readonly double desiredFps = 25;
        /// <summary>
        /// Defines the url.
        /// </summary>
        private IImageByteProvider provider;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="provider"></param>
        public ImageByteStreamer(IImageByteProvider provider, int width, int height) {
            this.provider = provider;
            string appPath = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            this.defaultImageBuffer = File.ReadAllBytes(Path.Combine(appPath, "no-stream.jpg"));
            Image image = Image.Load(this.defaultImageBuffer);
            image.Mutate(x => x.Resize(new ResizeOptions { Mode = ResizeMode.Crop, Size = new Size(width, height) }));
            using (MemoryStream ms = new MemoryStream()) {
                image.Save(ms, new JpegEncoder());
                ms.Seek(0, SeekOrigin.Begin);
                this.defaultImageBuffer = ms.ToArray();
            }

        }
        /// <summary>
        /// 
        /// </summary>
        public void StopStreamAsync() {
            this.contexts.ForEach((HttpContext ctx) => {
                try {
                    ctx.Abort();
                }
                catch (Exception ex) {
                    Log.Warning("Error when stop stream " + ex.Message);
                }
            });
            this.contexts.Clear();
        }
        private readonly List<HttpContext> contexts = new List<HttpContext>();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task StreamAsync(HttpContext context) {
            Stopwatch timer = new Stopwatch();
            context.Response.ContentType = "multipart/x-mixed-replace; boundary=--BoundaryString";
            context.Response.Headers.Add("Max-Age", "0");
            context.Response.Headers.Add("Expires", "0");
            context.Response.Headers.Add("Pragma", "no-cache");
            context.Response.Headers.Add("Cache-Control", "no-cache, private");
            await this.ResponseWithDefaultImage(context, timer);
            await this.WaitForFirstImage(context, timer);
            contexts.Add(context);
            try {
                int errorCount = 0;

                timer.Start();
                while (!context.RequestAborted.IsCancellationRequested) {
                    if (!await StreamImage(context)) {
                        errorCount++;
                        await this.ResponseWithDefaultImage(context, timer);
                    }
                    if (errorCount > 100) {
                        throw new InvalidOperationException("Too many error in StreamMiddleware");
                    }
                    await this.WaitFpsTime(timer);
                    timer.Restart();
                }
            }
            catch (Exception ex) {
                await this.ResponseWithDefaultImage(context, timer);
                timer.Stop();

                Log.Warning("StreamMiddleware : Error when read stream " + context.Request.Path.Value + " " + ex.Message);
            }
            contexts.Remove(context);
        }


        private async Task ResponseWithDefaultImage(HttpContext context, Stopwatch timer) {
            try {

                List<byte> datas = new List<byte>();

                datas.AddRange(Encoding.ASCII.GetBytes(string.Format(mjpegLengthPattern, defaultImageBuffer.Length)));
                datas.AddRange(defaultImageBuffer);
                datas.AddRange(doubleCarretReturnBytes);
                byte[] sendDatas = datas.ToArray();
                await context.Response.Body.WriteAsync(sendDatas, 0, sendDatas.Length, context.RequestAborted);
                await context.Response.Body.FlushAsync(context.RequestAborted);
                await this.WaitFpsTime(timer);
            }
            catch (Exception ex) {
                context.Abort();
                this.contexts.Remove(context);
                Log.Error("Error when stream default image");
                throw ex;
            }


        }

        private readonly string mjpegLengthPattern = "--BoundaryString\r\nContent-type: image/jpeg\r\nContent-Length: {0}\r\n\r\n";
        private readonly byte[] doubleCarretReturnBytes = Encoding.ASCII.GetBytes("\r\n\r\n");
        private byte[] defaultImageBuffer;

        public IImageByteProvider Provider => this.provider;



        private async Task<bool> StreamImage(HttpContext context) {
            List<byte> datas = new List<byte>();
            byte[] buffer = this.Provider.GetImageBytes();


            if (buffer != null && buffer.Length > 0) {
                datas.AddRange(Encoding.ASCII.GetBytes(string.Format(mjpegLengthPattern, buffer.Length)));
                datas.AddRange(buffer);
                datas.AddRange(doubleCarretReturnBytes);
                byte[] sendDatas = datas.ToArray();
                await context.Response.Body.WriteAsync(sendDatas, 0, sendDatas.Length, context.RequestAborted);
                await context.Response.Body.FlushAsync(context.RequestAborted);
                return true;
            }
            else return false;
        }



        private async Task WaitFpsTime(Stopwatch timer) {
            double secondPerFrame = 1D / this.desiredFps;
            double deltaSecond = secondPerFrame - timer.Elapsed.TotalSeconds;
            if (deltaSecond > 0) {
                int waitMs = (int)(secondPerFrame * 1000);
                await Task.Delay(waitMs);
            }
            else await Task.Delay(1);
        }
        private async Task WaitForFirstImage(HttpContext context, Stopwatch timer) {
            double waitSeconds = 0;
            int waitCount = 0;

            while (Provider.GetImageBytes() == null || Provider.GetImageBytes().Length == 0) {
                await Task.Delay(500);
                await this.ResponseWithDefaultImage(context, timer);
                waitCount++;
                waitSeconds = waitCount * 5D / 1000D;
                if (waitSeconds > 10) {
                    // throw new InvalidOperationException("No Connection after " + waitSeconds + " sec");
                }
            }
            System.Diagnostics.Debug.WriteLine("Connection Ok in " + waitSeconds + " sec");
        }
    }
}
