using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Streaming;
using Exavision.Seasense.Streaming;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Serilog;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace Exavision.Seasense.Server.Services {
    public class StreamingService : IStreamingService {

        public const string MEDIA_DIRECTORY = "Medias";
        private Dictionary<string, ImageByteStreamer> streamers = new Dictionary<string, ImageByteStreamer>();
        private readonly ISiteService siteService;
        private readonly IWebHostEnvironment env;

        public StreamingService(ISiteService siteService, IWebHostEnvironment env) {
            this.siteService = siteService;
            this.env = env;
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
                }
                else if (camera.StreamUrl.StartsWith("rtsp")) {
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
                timer.Stop();
                provider.StopProvider();
                if (data != null) {
                    DateTime now = DateTime.Now;
                    string mediaPath = Path.Combine(env.ContentRootPath, StreamingService.MEDIA_DIRECTORY);
                    if (!Directory.Exists(mediaPath)) Directory.CreateDirectory(mediaPath);
                    string fileName = Path.Combine(mediaPath, now.Year + "-" + now.Month + "-" + now.Day + "_" + now.Hour + "-" + now.Minute + "-" + now.Second + "-" + now.Millisecond + "_" + camera.DisplayName + ".jpg");
                    File.WriteAllBytes(fileName, data);
                    return fileName;
                }
                return null;
            }
            catch (Exception ex) {
                Log.Error("Error during scrennshot " + ex.Message + " " + ex.StackTrace);
                return null;
            }


        }

        public List<MediaFile> GetMediaFiles(HttpContext context) {
            string url = "http://" + context.Request.Host + "/Media";
            if (context.Request.IsHttps) {
                url = "https://" + context.Request.Host + "/Media";
            }
            string[] allowedExtensions = new string[] { "jpg", "png", "bmp", "avi", "mpg", "mp4", "mpeg" };
            List<MediaFile> list = new List<MediaFile>();
            string mediaPath = Path.Combine(env.ContentRootPath, StreamingService.MEDIA_DIRECTORY);

            string[] files = Directory.GetFiles(mediaPath);
            foreach (string file in files) {
                FileInfo info = new FileInfo(file);
                if (allowedExtensions.ToList().IndexOf(info.Extension.Substring(1).ToLower()) != -1) {
                    string fileUrl = url + file.Substring(mediaPath.Length).Replace("\\", "/");
                    MediaFile media = new MediaFile() {
                        Url = fileUrl,
                        Name = info.Name,
                        CreationDate = info.CreationTime,
                        Size = info.Length

                    };
                    list.Add(media);
                }
            }


            return list;
        }
    }
}
