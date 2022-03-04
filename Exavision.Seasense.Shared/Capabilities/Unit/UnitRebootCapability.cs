using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Unit {
    public abstract class UnitRebootCapability : Capability<SettingCapabilityEmpty>, IUnitRebootCapability {


        public abstract void Reboot();

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.UnitReboot;
            return setting;
        }
    }
}
