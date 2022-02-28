using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public abstract class TurretMoveAbsoluteCapability<S> : Capability<S>, ITurretMoveAbsoluteCapability where S : SettingCapability, new() {



        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.TurretMoveSpeed;
            return setting;
        }




    }
}
