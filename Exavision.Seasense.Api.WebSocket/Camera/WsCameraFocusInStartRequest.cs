using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Turret {

    public class WsCameraFocusInStartRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }


    }
}
