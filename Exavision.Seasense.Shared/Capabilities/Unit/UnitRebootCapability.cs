using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Unit {
    public abstract class UnitRebootCapability<S> : Capability<S> where S : SettingCapability {
        public abstract void Reboot();
    }
}
