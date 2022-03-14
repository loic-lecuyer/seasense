using Exavision.Seasense.Api.WebSocket.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Api.WebSocket.Unit {
    public class WsUnitGetLastComMessageRequest : WsRequest {
        public string UnitId { get; set; }
    }
}
