using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.LazerMeasurement {
    public abstract class LazerMeasurementShootCapability : Capability<SettingCapabilityEmpty>, ILazerMeasurementShootCapability {
        public bool IsOn { get; protected set; }

        public abstract void ShootMeasurement();
        public override void SetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.LazerMeasurementShootCapability;
            base.SetSetting(setting);
        }

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.LazerMeasurementShootCapability;
            setting.DisplayName = setting.CapabilityType.ToString();
            return setting;
        }
    }
}
