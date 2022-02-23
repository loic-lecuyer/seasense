using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Settings;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Unit<S> : IUnit where S : SettingMaterial {
        public List<IMaterial> Materials { get; set; } = new List<IMaterial>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();
        public abstract S GetSetting();
        public abstract void SetSetting(S setting);
        public SettingMaterial GetSettingMaterial() {
            return this.GetSetting();
        }



    }
}
