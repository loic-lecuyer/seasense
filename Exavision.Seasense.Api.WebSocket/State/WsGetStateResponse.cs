using Exavision.Seasense.Api.WebSocket.Core;
using Exavision.Seasense.Shared.States;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Api.WebSocket.States {
    public  class WsGetStateResponse : WsResponse {
        public SiteState Site { get; set; }
    }
}
