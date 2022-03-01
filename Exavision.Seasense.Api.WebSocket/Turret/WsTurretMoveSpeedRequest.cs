using Exavision.Seasense.Api.WebSocket.Core;
using Exavision.Seasense.Shared.Types;

namespace Exavision.Seasense.Api.WebSocket.Turret {
    public class WsTurretMoveSpeedRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
        public SpeedVector Speed { get; set; }

    }
}
