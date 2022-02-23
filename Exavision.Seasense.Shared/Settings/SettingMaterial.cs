
using System.Collections.Generic;


namespace Exavision.Seasense.Shared.Settings {

    public abstract class SettingMaterial : SettingBase {

        public List<SettingCapability> Capabilities { get; set; } = new List<SettingCapability>();
        public List<SettingMaterial> Materials { get; set; } = new List<SettingMaterial>();
    }
}
