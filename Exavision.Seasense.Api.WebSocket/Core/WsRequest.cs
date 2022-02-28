namespace Exavision.Seasense.Api.WebSocket.Core {
    public abstract class WsRequest {
        public string Token { get; set; }
        public string UnitId { get; set; }
        public string MaterialId { get; set; }
        public string RequestId { get; set; }
    }
}
