using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.LazerMeasurement {
    public abstract class LazerMeasurementShootCapability<S> : Capability<S>, ILazerMeasurementShootCapability where S : SettingCapability, new() {
        public bool IsOn { get; protected set; }

        public abstract void ShootMeasurement();
        public override void SetSetting(S setting) {
            setting.CapabilityType = CapabilityType.LazerMeasurementShootCapability;
            base.SetSetting(setting);
        }
    }
}
