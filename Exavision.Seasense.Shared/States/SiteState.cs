using System.Collections.Generic;

namespace Exavision.Seasense.Shared.States {
    public class SiteState : State {
        public List<MaterialState> Units { get; set; } = new List<MaterialState>();

        public List<CapabilityState> Capabilities { get; set; } = new List<CapabilityState>();


        public List<RecordingState> Recordings { get; set; } = new List<RecordingState>();

    }
}
