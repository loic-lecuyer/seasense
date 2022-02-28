using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Turret {
    public class WsTurretMoveSpeedRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
        public string RequestId { get; set; }
        public double AxisX { get; set; }

        public double AxisY { get; set; }
    }
}
