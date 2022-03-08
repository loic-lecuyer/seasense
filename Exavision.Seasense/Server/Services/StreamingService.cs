using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Streaming;
using Exavision.Seasense.Streaming;
using System.Collections.Generic;

namespace Exavision.Seasense.Server.Services {
    public class StreamingService : IStreamingService {

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
                        ImageByteStreamer streamer = new ImageByteStreamer(provider,camera.ImageWidth,camera.ImageHeight);
                        streamers.Add(materialId, streamer);
                        return streamer;
                    }
                }  
            }
            return null;
        }
    }
}
