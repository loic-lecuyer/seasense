using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Camera {
    public class WsCameraScreenshotResponse : WsResponse {
        public string FileName { get; set; }
        public string UserLogin { get; set; }
    }
}
