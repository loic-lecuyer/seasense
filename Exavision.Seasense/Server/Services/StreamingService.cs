using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Streaming;
using Exavision.Seasense.Streaming;
using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;

namespace Exavision.Seasense.Server.Services {
    public class StreamingService : IStreamingService {

        const string MEDIA_DIRECTORY = "Medias";
        private Dictionary<string, ImageByteStreamer> streamers = new Dictionary<string, ImageByteStreamer>();
        private readonly ISiteService siteService;

        public StreamingService(ISiteService siteService) {
            this.siteService = siteService;
        }
        public IImageByteStreamer GetImageByteStreamer(string materialId) {
            if (streamers.ContainsKey(materialId)) {
                return streamers[materialId];
            }
            else {
                IMaterial material = this.siteService.FindMaterialById(materialId);
                if (material == null) return null;
                IImageByteProvider provider = null;
                if (material is ICamera camera) {
                    if (!string.IsNullOrEmpty(camera.StreamUrl)) {
                        if (camera.StreamUrl.StartsWith("http")) {
                            provider = new MjpegImageByteProvider(camera.StreamUrl);
                        }
                        else if (camera.StreamUrl.StartsWith("rtsp")) {
                            provider = new RtspImageByteProvider(camera.StreamUrl);
                        }
                    }
                    if (provider == null) return null;
                    else {
                        provider.StartProvider();
                        ImageByteStreamer streamer = new ImageByteStreamer(provider, camera.ImageWidth, camera.ImageHeight);
                        streamers.Add(materialId, streamer);
                        return streamer;
                    }
                }
            }
            return null;
        }
        private void CreateMediaDirectoryIfNotExist() {
            if (!Directory.Exists(MEDIA_DIRECTORY)) {
                Directory.CreateDirectory(MEDIA_DIRECTORY);
            }
        }

        public string Screenshot(ICamera camera) {
            try {
                this.CreateMediaDirectoryIfNotExist();
                IImageByteProvider provider = null;
                if (camera.StreamUrl.StartsWith("http")) {
                    provider = new MjpegImageByteProvider(camera.StreamUrl);
                } else if (camera.StreamUrl.StartsWith("rtsp")) {
                    provider = new RtspImageByteProvider(camera.StreamUrl);
                }

                if (provider == null) return null;
                provider.StartProvider();
                bool timeouted = false;
                byte[] data = null;
                Stopwatch timer = new Stopwatch();
                timer.Start();
                while (!timeouted) {
                    data = provider.GetImageBytes();
                    if (data != null) break;
                    if (timer.Elapsed.TotalSeconds > 2) break;

                }
                provider.StopProvider();
                if (data != null) {
                    DateTime now = DateTime.Now;
                    string fileName = Path.Combine(MEDIA_DIRECTORY, now.Year + "-" + now.Month + "-" + now.Day + "_" + now.Hour + "-" + now.Minute + "-" + now.Second + "-" + now.Millisecond + "_" + camera.DisplayName + ".jpg");
                    File.WriteAllBytes(fileName, data);
                    return fileName;
                }

                timer.Stop();
                return null;
            } catch (Exception ex) {
                Log.Error("Error during scrennshot " + ex.Message + " " + ex.StackTrace);
                return null;
            }
           

        }
    }
}
