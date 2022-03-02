using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Exavision.Seasense.Shared.States.Camera;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraZoomAbsolutePositionCapability<S> : Capability<S>, ICameraZoomAbsolutePositionCapability where S : SettingCapability, new() {
        public abstract double HorizontalFieldOfView { get; }

        public abstract double ZoomMultiplier { get; }

        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.CameraZoomAbsolutePosition;
            return setting;
        }
        public override CapabilityState GetState() {
            CameraZoomAbsolutePositionState state = new CameraZoomAbsolutePositionState() {
                Id = this.Id,
                HorizontalFieldOfView = this.HorizontalFieldOfView,
                ZoomMultiplier = this.ZoomMultiplier
            };
            return state;
        }
    }
}
