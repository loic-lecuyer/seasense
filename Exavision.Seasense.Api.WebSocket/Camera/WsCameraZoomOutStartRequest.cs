using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Turret {
    public class WsCameraZoomOutStartRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }


    }
}
