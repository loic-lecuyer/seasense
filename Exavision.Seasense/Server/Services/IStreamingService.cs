using Exavision.Seasense.Shared.Streaming;
using Exavision.Seasense.Streaming;

namespace Exavision.Seasense.Server.Services {
    public interface IStreamingService {
        IImageByteStreamer GetImageByteStreamer(string materialId);
    }
}
