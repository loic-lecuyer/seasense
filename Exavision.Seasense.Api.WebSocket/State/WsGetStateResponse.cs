using Exavision.Seasense.Api.WebSocket.Core;
using Exavision.Seasense.Shared.States;

namespace Exavision.Seasense.Api.WebSocket.States {
    public class WsGetStateResponse : WsResponse {
        public State Site { get; set; }
    }
}
