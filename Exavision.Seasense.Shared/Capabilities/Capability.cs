using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities {
    public abstract class Capability<S> : ICapability where S : SettingCapability {
        public SettingCapability GetSettingCapability() {
            return GetSetting();
        }
        public virtual void SetSetting(S setting) { 
        }
        public abstract S GetSetting();
    }
}
