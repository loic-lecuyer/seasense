using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Streaming;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace Exavision.Seasense.Server.Services {
    public interface IStreamingService {
        IImageByteStreamer GetImageByteStreamer(string materialId);
        string Screenshot(ICamera camera);
        List<MediaFile> GetMediaFiles(HttpContext context);
    }
}
