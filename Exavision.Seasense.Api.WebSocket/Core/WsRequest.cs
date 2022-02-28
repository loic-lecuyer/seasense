namespace Exavision.Seasense.Api.WebSocket.Core {
    public abstract class WsRequest : WsMessage {
        public string Token { get; set; }
        public string RequestId { get; set; }



    }
}
