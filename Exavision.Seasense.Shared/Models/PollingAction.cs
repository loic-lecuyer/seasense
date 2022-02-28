using System;

namespace Exavision.Seasense.Shared.Models {
    public struct PollingAction {
        public Action Action { get; set; }

        public long Delay { get; set; }
    }
}
