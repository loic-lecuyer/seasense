using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Streaming;

namespace Exavision.Seasense.Server.Services {
    public interface IStreamingService {
        IImageByteStreamer GetImageByteStreamer(string materialId);
        string Screenshot(ICamera camera);
    }
}
