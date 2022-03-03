using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Exavision.Seasense.Shared.States.Turret;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public abstract class TurretGyrostabilizationCapability<S> : Capability<S>, ITurretGyrostabilizationCapability where S : SettingCapability, new() {
        public abstract bool IsEnabled {
            get;
        }

        public abstract void SetGyrostabilization(bool enabled);

        public override S GetSetting(S setting) {

            setting.CapabilityType = CapabilityType.TurretGyrostabilization;
            return setting;
        }

        public override CapabilityState GetState() {
            TurretGyrostabilizationState state = new TurretGyrostabilizationState() {
                Id = this.Id,
                IsEnabled = this.IsEnabled
            };
            return state;
        }

    }
}
