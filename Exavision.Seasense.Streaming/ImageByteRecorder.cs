using Emgu.CV;
using Exavision.Seasense.Shared.Streaming;
using FFMediaToolkit;
using FFMediaToolkit.Encoding;
using FFMediaToolkit.Graphics;
using Serilog;
using System;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;

namespace Exavision.Seasense.Streaming {
    public class ImageByteRecorder {
        private readonly IImageByteProvider provider;
        private readonly string fileName;
        private readonly int width;
        private readonly int height;
        private CancellationTokenSource canceller;
        private Task task;
        private byte[] currentFrame;
        private Bitmap bmp;



        public int Fps { get; private set; } = 25;

        public ImageByteRecorder(IImageByteProvider provider, string fileName, int width, int height) {
            this.provider = provider;
            this.fileName = fileName;
            this.width = width;
            this.height = height;
        }

        public void Start() {


            try {


                this.canceller = new CancellationTokenSource();
                this.task = Task.Factory.StartNew(() => { this.Loop(); });

            }
            catch (Exception ex) {
                Log.Error("Error when start recording " + ex.Message);
            }

        }

        private void Loop() {
            try {
                this.provider.StartProvider();

                if (!this.WaitForFirstImage()) {
                    this.Stop();
                    return;
                }
                Stopwatch watcher = new Stopwatch();
                DateTime previousDate = DateTime.Now;
                TimeSpan previousTime = TimeSpan.FromMilliseconds(0);
                
                MediaOutput writer = null;
                Log.Information("Start Recording " + this.fileName);
                int index = 1;
                watcher.Start();
                while (!this.canceller.IsCancellationRequested) {
                    this.currentFrame = this.provider.GetImageBytes();
                    if (this.currentFrame == null) continue;
                    if (!this.IsValidJpegFrame(this.currentFrame)) continue;
                    using (MemoryStream ms = new MemoryStream(this.currentFrame)) {

                        bmp = new Bitmap(ms);
                      
                        if (writer == null) {
                            writer = this.CreateMediaOutput(bmp);
                        }
                        ImageData imageData = ToImageData(bmp);
                        writer.Video.AddFrame(imageData);
                        DateTime now = DateTime.Now;
                        TimeSpan elapsed = now - previousDate;
                        previousTime += elapsed;
                        previousDate = now;
                        int wait = (int)((1000D / this.Fps) - watcher.Elapsed.TotalMilliseconds);
                        if (wait <= 0) wait = 1;
                        this.canceller.Token.WaitHandle.WaitOne(wait);
                        watcher.Restart();
                        index++;
                    }

                }
                this.provider.StopProvider();
                writer?.Dispose();
                Log.Information("File recorded " + this.fileName);
            }
            catch (Exception ex) {
                Log.Error("Error during recording " + ex.Message);
            }

        }
        /// <param name="bitmap">The bitmap<see cref="Bitmap"/>.</param>
        /// <returns>The <see cref="ImageData"/>.</returns>
        public ImageData ToImageData(Bitmap bitmap) {
            var rect = new Rectangle(Point.Empty, bitmap.Size);
            var bitmapData = bitmap.LockBits(rect, ImageLockMode.ReadOnly, bitmap.PixelFormat);
            var length = bitmapData.Stride * bitmapData.Height;
            var data = new byte[length];
            Marshal.Copy(bitmapData.Scan0, data, 0, length);
            bitmap.UnlockBits(bitmapData);
            return ImageData.FromArray(data, ImagePixelFormat.Bgr24, bitmap.Size);
        }
        private MediaOutput CreateMediaOutput(Bitmap image) {
            try {

                int imageWidth = image.Width;
                int imageHeight = image.Height;

                VideoEncoderSettings settings = new VideoEncoderSettings(width: imageWidth, height: imageHeight, framerate: this.Fps, codec: VideoCodec.H264) {
                    EncoderPreset = EncoderPreset.UltraFast,
                    CRF = 17
                };

          
                MediaOutput output = MediaBuilder.CreateContainer(this.fileName).WithVideo(settings).Create();
                return output;
                Log.Information("Video create " + this.fileName);

            } catch (Exception ex) {
                string log = "Error when create media output  (FFMPEG " + FFmpegLoader.FFmpegPath + " version " + FFmpegLoader.FFmpegVersion + " ) " + ex.Message;
                Log.Warning(log);
            }
            return null;
        }
        private bool WaitForFirstImage() {
            Stopwatch watcher = new Stopwatch();
            watcher.Start();
            // Wait first frame ready
            while (this.currentFrame == null) {
                this.currentFrame = this.provider.GetImageBytes();
                Thread.Sleep(10);
                if (watcher.Elapsed.TotalSeconds > 5) {
                    watcher.Stop();
                    return false;
                }
                if (this.canceller.IsCancellationRequested) { return false; }

            }
            watcher.Stop();
            return true;
        }
        private bool IsValidJpegFrame(byte[] currentFrame) {
            if (currentFrame.Length < 16) return false;
            byte firstByte = this.currentFrame[0];
            byte secondByte = this.currentFrame[1];
            byte lastByte = this.currentFrame[this.currentFrame.Length - 1];
            byte beforeLastByte = this.currentFrame[this.currentFrame.Length - 2];
            if (firstByte == 0xff && secondByte == 0xd8 && beforeLastByte == 0xff && lastByte == 0xd9) {
                return true;
            }
            return false;
        }
        public void Stop() {
            if (this.canceller != null) this.canceller.Cancel();
        }
    }
}
