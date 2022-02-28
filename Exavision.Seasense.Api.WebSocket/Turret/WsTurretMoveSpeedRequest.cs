using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Turret {
    public class WsTurretMoveSpeedRequest : WsRequest {
        public double AxisX { get; set; }

        public double AxisY { get; set; }
    }
}
