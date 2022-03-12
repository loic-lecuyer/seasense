using Exavision.Seasense.Api.WebSocket.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Api.WebSocket.Medias {
    public class WsDeleteMediaRequest : WsRequest {
        public string FileName { get; set; }
    }
}
