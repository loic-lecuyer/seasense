using Exavision.Seasense.Streaming;

namespace Exavision.Seasense.Server.Services {
    public interface IStreamingService {
        ImageByteStreamer GetImageByteStreamer(string materialId);
    }
}
