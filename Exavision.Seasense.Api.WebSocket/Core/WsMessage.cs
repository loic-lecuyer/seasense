using Newtonsoft.Json;

namespace Exavision.Seasense.Api.WebSocket.Core {
    public abstract class WsMessage {
        [JsonProperty("$type")]
        public string Type { get; set; }

        public WsMessage() {
            this.Type = this.GetType().Name;
        }
    }
}
