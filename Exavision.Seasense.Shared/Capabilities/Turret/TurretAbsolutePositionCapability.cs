using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Exavision.Seasense.Shared.States.Turret;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public class TurretAbsolutePositionCapability : Capability<SettingCapabilityEmpty>, ITurretAbsolutePositionCapability {
        public double Pan { get; protected set; }
        public double Tilt { get; protected set; }

        public TurretAbsolutePositionCapability() {

        }

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {

            setting.CapabilityType = CapabilityType.TurretAbsolutePosition;
            return setting;
        }

        public override CapabilityState GetState() {
            TurretAbsolutePositionState state = new TurretAbsolutePositionState() {
                Id = this.Id,
                Pan = this.Pan,
                Tilt = this.Tilt
            };
            return state;
        }
    }
}
