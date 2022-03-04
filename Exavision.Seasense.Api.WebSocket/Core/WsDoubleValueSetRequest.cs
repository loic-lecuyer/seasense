namespace Exavision.Seasense.Api.WebSocket.Core {
    public class WsDoubleValueSetRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
        public string CapabilityId { get; set; }
        public double Value { get; set; }
    }
}
