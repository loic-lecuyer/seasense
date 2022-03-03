using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.LazerMeasurement {
    public class WsLazerMeasurementShootRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
    }
}
