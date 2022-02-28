using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.States {
    public class MaterialState : State {

        public string Id { get; set; }
        public List<CapabilityState> Capabilities { get; set; } = new List<CapabilityState>();

        public List<MaterialState> Materials { get; set; } = new List<MaterialState>();
    }
}
