using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public abstract class TurretMoveSpeedCapability<S> : Capability<S>, ITurretMoveSpeedCapability where S : SettingCapability, new() {
        public abstract double CurrentPanSpeed { get; }

        public abstract double CurrentTiltSpeed { get; }

        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.TurretMoveSpeed;
            return setting;
        }

        public abstract void MoveSpeed(double axisX, double axisY);
    }
}
