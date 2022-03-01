using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Exavision.Seasense.Shared.States.Turret;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public class TurretAbsolutePositionCapability<S> : Capability<S>, ITurretAbsolutePositionCapability where S : SettingCapability, new() {
        public double Pan { get; protected set; }
        public double Tilt { get; protected set; }

        public TurretAbsolutePositionCapability() {

        }

        public override S GetSetting(S setting) {

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
