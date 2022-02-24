using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Unit {
    public abstract class UnitRebootCapability<S> : Capability<S>, IUnitRebootCapability where S : SettingCapability, new() {
        public abstract void Reboot();

        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.UnitReboot;
            return setting;
        }
    }
}
