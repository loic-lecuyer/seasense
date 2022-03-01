using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraZoomAbsolutePositionCapability<S> : Capability<S>, ICameraZoomAbsolutePositionCapability where S : SettingCapability, new() {
        public abstract double HorizontalFieldOfView { get; }

        public abstract double ZoomMultiplier { get; }
    }
}
