namespace Exavision.Seasense.Api.WebSocket.Core {
    public class WsSwitchValueSetRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
        public string CapabilityId { get; set; }
        public string Value { get; set; }
    }
}
