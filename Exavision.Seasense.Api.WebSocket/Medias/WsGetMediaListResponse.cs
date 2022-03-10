using Exavision.Seasense.Api.WebSocket.Core;
using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;

namespace Exavision.Seasense.Api.WebSocket.Medias {
    public class WsGetMediaListResponse : WsResponse {
        public List<MediaFile> Files { get; set; } = new List<MediaFile>();
    }
}
