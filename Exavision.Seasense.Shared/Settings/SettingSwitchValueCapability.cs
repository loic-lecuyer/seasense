using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Settings {
    public class SettingSwitchValueCapability : SettingCapability {
        public List<SwitchValue> Values { get; set; } = new List<SwitchValue>();

        public SwitchValueType SwitchValueType { get; set; }
    }
}
