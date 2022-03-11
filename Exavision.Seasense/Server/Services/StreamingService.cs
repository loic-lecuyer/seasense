using Exavision.Seasense.Server.Models;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.States;
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

                if (material is ICamera camera) {
                    IImageByteProvider provider = CreateImageByteProvider(camera.StreamUrl);
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

        public IImageByteProvider CreateImageByteProvider(string url) {
            IImageByteProvider provider = null;
            if (!string.IsNullOrEmpty(url)) {
                if (url.StartsWith("http")) {
                    provider = new MjpegImageByteProvider(url);
                }
                else if (url.StartsWith("rtsp")) {
                    provider = new RtspImageByteProvider(url);
                }
            }

            return provider;
        }
        private void CreateMediaDirectoryIfNotExist() {
            if (!Directory.Exists(MEDIA_DIRECTORY)) {
                Directory.CreateDirectory(MEDIA_DIRECTORY);
            }
        }

        public string Screenshot(ICamera camera) {
            try {
                this.CreateMediaDirectoryIfNotExist();
                IImageByteProvider provider = CreateImageByteProvider(camera.StreamUrl);

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
            string url = "http://" + context.Request.Host + "/Medias";
            if (context.Request.IsHttps) {
                url = "https://" + context.Request.Host + "/Medias";
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
            list = (from l in list orderby l.CreationDate descending select l).ToList();

            return list;
        }
        private List<Tuple<Recording, ImageByteRecorder>> recordings = new List<Tuple<Recording, ImageByteRecorder>>();

        public string StartRecord(ICamera camera, User user) {

            IImageByteProvider provider = this.CreateImageByteProvider(camera.StreamUrl);
            if (provider == null) return null;
            Recording recording = new Recording(user, camera.Id, camera.DisplayName);
            try {
                string mediaPath = Path.Combine(env.ContentRootPath, StreamingService.MEDIA_DIRECTORY);
                string filePath = Path.Combine(mediaPath, recording.FileName);
                ImageByteRecorder recorder = new ImageByteRecorder(provider, filePath, camera.ImageWidth, camera.ImageHeight);
                recorder.Start();
                this.recordings.Add(new Tuple<Recording, ImageByteRecorder>(recording, recorder));
                return recording.Id;
            }
            catch (Exception ex) {
                Log.Error("Error when start recording " + ex.Message);

            }
            return null;
        }

        public List<RecordingState> GetRecordingStates() {
            List<RecordingState> states = new List<RecordingState>();
            this.recordings.ForEach((Tuple<Recording, ImageByteRecorder> rec) => {
                string description = "File " + rec.Item1.FileName + " recording from ";

                TimeSpan diff = DateTime.Now - rec.Item1.StartDate;
                description += diff.Hours.ToString("00") + ":" + diff.Minutes.ToString("00") + ":" + diff.Seconds.ToString("00") + ":" + diff.Milliseconds.ToString("0000");
                RecordingState state = new RecordingState() {
                    FileName = rec.Item1.FileName,
                    StartDate = rec.Item1.StartDate,
                    UserLogin = rec.Item1.User.Login,
                    Id = rec.Item1.Id,
                    MaterialId = rec.Item1.MaterialId,
                    Description = description
                };
                states.Add(state);
            });

            return states;
        }

        public void StopRecord(string recordId) {
            Tuple<Recording, ImageByteRecorder> recording = (from r in this.recordings where r.Item1.Id.Equals(recordId) select r).FirstOrDefault();
            if (recording != null) {
                recording.Item2.Stop();
                this.recordings.Remove(recording);
            }
        }

        public void StopRecords(User user) {
            List<Tuple<Recording, ImageByteRecorder>> recordToStop = (from r in recordings where r.Item1.User.Login.Equals(user.Login) select r).ToList();
            foreach (Tuple<Recording, ImageByteRecorder> recording in recordToStop) {
                recording.Item2.Stop();
                recordings.Remove(recording);
            }
            recordToStop.Clear();
        }
    }
}
