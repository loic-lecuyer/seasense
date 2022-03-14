using Exavision.Seasense.Api.WebSocket.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Api.WebSocket.Unit {
    public class WsUnitGetLastComMessageResponse : WsResponse {
        public List<string> Messages { get; set; } = new List<string>();
    }
}
