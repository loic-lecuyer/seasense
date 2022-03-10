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
        private CancellationTokenSource canceller;
        private Task task;
        private byte[] currentFrame;
        private Bitmap bmp;
        private MediaOutput mediaOutput;


        public int Fps { get; private set; } = 25;

        public ImageByteRecorder(IImageByteProvider provider, string fileName) {
            this.provider = provider;
            this.fileName = fileName;
        }

        public void Start() {
            this.provider.StartProvider();

            try {


                this.canceller = new CancellationTokenSource();
                this.task = Task.Factory.StartNew(() => { this.Loop(); });

            }
            catch (Exception ex) {
                Log.Error("Error when start recording " + ex.Message);
            }

        }

        private void Loop() {
            if (!this.WaitForFirstImage()) {
                this.Stop();
                return;
            }
            Stopwatch watcher = new Stopwatch();
            DateTime previousDate = DateTime.Now;
            TimeSpan previousTime = TimeSpan.FromMilliseconds(0);
            while (!this.canceller.IsCancellationRequested) {
                if (this.currentFrame == null) continue;
                if (!this.IsValidJpegFrame(this.currentFrame)) continue;
                using (MemoryStream ms = new MemoryStream(this.currentFrame)) {
                    bmp = new Bitmap(ms);
                    this.CreateMediaOutput(bmp);
                    ImageData data = ToImageData(bmp);
                    this.mediaOutput.Video.AddFrame(data);
                    Log.Information("Add frame");
                    DateTime now = DateTime.Now;
                    TimeSpan elapsed = now - previousDate;
                    previousTime += elapsed;
                    previousDate = now;
                    int wait = (int)((1000D / this.Fps) - watcher.Elapsed.TotalMilliseconds);
                    if (wait <= 0) wait = 1;
                    this.canceller.Token.WaitHandle.WaitOne(wait);
                    watcher.Reset();
                }

            }
        }
        public ImageData ToImageData(Bitmap bitmap) {
            var rect = new Rectangle(Point.Empty, bitmap.Size);
            var bitmapData = bitmap.LockBits(rect, ImageLockMode.ReadOnly, bitmap.PixelFormat);
            var length = bitmapData.Stride * bitmapData.Height;
            var data = new byte[length];
            Marshal.Copy(bitmapData.Scan0, data, 0, length);
            bitmap.UnlockBits(bitmapData);
            return ImageData.FromArray(data, ImagePixelFormat.Bgr24, bitmap.Size);
        }
        private void CreateMediaOutput(Bitmap image) {
            try {

                int imageWidth = image.Width;
                int imageHeight = image.Height;

                VideoEncoderSettings settings = new VideoEncoderSettings(width: imageWidth, height: imageHeight, framerate: this.Fps, codec: VideoCodec.H264) {
                    EncoderPreset = EncoderPreset.UltraFast,
                    CRF = 17
                };

                MediaOutput output = MediaBuilder.CreateContainer(this.fileName).WithVideo(settings).Create();
                this.mediaOutput = output;


            }
            catch (Exception ex) {
                string log = "Error when create media output  (FFMPEG " + FFmpegLoader.FFmpegPath + " version " + FFmpegLoader.FFmpegVersion + " ) " + ex.Message;
                Log.Warning(log);
            }
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
        public void Stop() { }
    }
}
