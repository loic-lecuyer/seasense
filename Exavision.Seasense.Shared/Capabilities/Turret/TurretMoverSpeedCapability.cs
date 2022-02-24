using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public abstract class TurretMoverSpeedCapability<S> : Capability<S>, ITurretMoverSpeedCapability where S : SettingCapability, new() {
        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.TurretMoveSpeed;
            return setting;
        }
    }
}
