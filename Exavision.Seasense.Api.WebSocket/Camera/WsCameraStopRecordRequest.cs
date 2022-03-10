using Exavision.Seasense.Api.WebSocket.Core;

namespace Exavision.Seasense.Api.WebSocket.Camera {
    public class WsCameraStopRecordRequest : WsRequest {
        public string UnitId { get; set; }
        public string MaterialId { get; set; }

        public string RecordId { get; set; }
    }
}
