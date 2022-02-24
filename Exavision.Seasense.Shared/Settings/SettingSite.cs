using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Settings {
    public class SettingSite : SettingBase {
        public List<SettingMaterial> Units { get; set; } = new List<SettingMaterial>();
        public List<SettingCapability> Capabilities { get; set; } = new List<SettingCapability>();
    }
}
