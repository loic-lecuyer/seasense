using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Camera {
    public class WsCameraScreenshotRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
    }
}
