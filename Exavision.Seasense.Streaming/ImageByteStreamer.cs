using Microsoft.AspNetCore.Http;
using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Exavision.Seasense.Streaming {
    public class ImageByteStreamer {




        private readonly double desiredFps = 25;
        /// <summary>
        /// Defines the url.
        /// </summary>
        private readonly IImageByteProvider provider;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="provider"></param>
        public ImageByteStreamer(IImageByteProvider provider) {
            this.provider = provider;
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
            await this.ResponseWithDefaultImage(context);
            await this.WaitForFirstImage(context);
            contexts.Add(context);
            try {
                int errorCount = 0;

                timer.Start();
                while (!context.RequestAborted.IsCancellationRequested) {
                    if (!await StreamImage(context)) {
                        errorCount++;
                        await this.ResponseWithDefaultImage(context);
                    }
                    if (errorCount > 100) {
                        throw new InvalidOperationException("Too many error in StreamMiddleware");
                    }
                    await this.WaitFpsTime(timer);
                    timer.Restart();
                }
            }
            catch (Exception ex) {
                timer.Stop();
                await this.ResponseWithDefaultImage(context);
                Log.Warning("StreamMiddleware : Error when read stream " + context.Request.Path.Value + " " + ex.Message);
            }
            contexts.Remove(context);
        }


        private async Task ResponseWithDefaultImage(HttpContext context) {
            try {
                string appPath = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

                List<byte> datas = new List<byte>();
                byte[] buffer = File.ReadAllBytes(Path.Combine(appPath, "no-stream.jpg"));
                datas.AddRange(Encoding.ASCII.GetBytes(string.Format(mjpegLengthPattern, buffer.Length)));
                datas.AddRange(buffer);
                datas.AddRange(doubleCarretReturnBytes);
                byte[] sendDatas = datas.ToArray();
                await context.Response.Body.WriteAsync(sendDatas, 0, sendDatas.Length, context.RequestAborted);
                await context.Response.Body.FlushAsync(context.RequestAborted);
            }
            catch (Exception ex) {
                Log.Error("Error when stream default image");
            }


        }

        private readonly string mjpegLengthPattern = "--BoundaryString\r\nContent-type: image/jpeg\r\nContent-Length: {0}\r\n\r\n";
        private readonly byte[] doubleCarretReturnBytes = Encoding.ASCII.GetBytes("\r\n\r\n");

        private async Task<bool> StreamImage(HttpContext context) {
            List<byte> datas = new List<byte>();
            byte[] buffer = this.provider.GetImageBytes();


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
        private async Task WaitForFirstImage(HttpContext context) {
            double waitSeconds = 0;
            int waitCount = 0;

            while (provider.GetImageBytes() == null || provider.GetImageBytes().Length == 0) {
                await Task.Delay(500);
                await this.ResponseWithDefaultImage(context);
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
