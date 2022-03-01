using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraZoomAbsolutePositionCapability<S> : Capability<S>, ICameraZoomAbsolutePositionCapability where S : SettingCapability, new() {
        public double HorizontalFieldOfView { get; }

        public double ZoomMultiplier { get; }
    }
}
