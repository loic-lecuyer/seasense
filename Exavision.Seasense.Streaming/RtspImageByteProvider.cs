using Exavision.Seasense.Shared.Streaming;
using RtspClientSharp;
using RtspClientSharp.RawFrames.Video;
using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace Exavision.Seasense.Streaming {
    public class RtspImageByteProvider : IImageByteProvider {
        private string streamUrl;
        private CancellationTokenSource canceller;
        public RtspImageByteProvider(string streamUrl) {
            this.streamUrl = streamUrl;


        }
        public static string GetUsername(Uri uri) {
            if (uri == null || string.IsNullOrWhiteSpace(uri.UserInfo))
                return string.Empty;

            var items = uri.UserInfo.Split(new[] { ':' });
            return items.Length > 0 ? items[0] : string.Empty;
        }

        public static string GetPassword(Uri uri) {
            if (uri == null || string.IsNullOrWhiteSpace(uri.UserInfo))
                return string.Empty;

            var items = uri.UserInfo.Split(new[] { ':' });
            return items.Length > 1 ? items[1] : string.Empty;
        }
        private byte[] imageBytes;
        private object imageByteLocker = new object();
        public byte[] GetImageBytes() {
            lock (imageByteLocker) {
                return this.imageBytes;
            }

        }

        public void StartProvider() {

            Task.Factory.StartNew(StartProviderAsync);

        }

        private async Task StartProviderAsync() {
            this.canceller = new CancellationTokenSource();
            string rtspUrl = streamUrl;
            Uri uri = new Uri(streamUrl);
            string login = GetUsername(uri);
            string password = GetPassword(uri);
            ConnectionParameters connectionParameters = null;
            if (!String.IsNullOrEmpty(login) && !String.IsNullOrEmpty(password)) {
                rtspUrl = rtspUrl.Replace(login + ":" + password + "@", "");
                var credentials = new NetworkCredential(login, password);
                connectionParameters = new ConnectionParameters(new Uri(rtspUrl), credentials);
            }
            else {
                connectionParameters = new ConnectionParameters(new Uri(rtspUrl));
            }
            connectionParameters.RtpTransport = RtpTransportProtocol.TCP;
            using (var rtspClient = new RtspClient(connectionParameters)) {
                rtspClient.FrameReceived += (sender, frame) => {
                    //process (e.g. decode/save to file) encoded frame here or 
                    //make deep copy to use it later because frame buffer (see FrameSegment property) will be reused by client
                    switch (frame) {
                        case RawH264IFrame h264IFrame:
                        case RawH264PFrame h264PFrame:
                        case RawJpegFrame jpegFrame:
                            lock (imageByteLocker) {
                                this.imageBytes = frame.FrameSegment.ToArray();
                            }
                            break;
                    }
                };
                await rtspClient.ConnectAsync(this.canceller.Token);
                await rtspClient.ReceiveAsync(this.canceller.Token);
            }
        }

        public void StopProvider() {
            if (this.canceller != null) this.canceller.Cancel();

        }
    }
}
