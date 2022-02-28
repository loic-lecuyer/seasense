using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.States {
    public class SiteState : State {
        public List<MaterialState> Units { get; set; } = new List<MaterialState>();

        public List<CapabilityState> Capabilies { get; set; } = new List<CapabilityState>();
    }
}
