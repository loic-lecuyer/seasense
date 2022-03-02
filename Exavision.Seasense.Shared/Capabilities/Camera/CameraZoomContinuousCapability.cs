using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraZoomContinuousCapability<S> : Capability<S>, ICameraZoomContinuousCapability where S : SettingCapability, new() {
        public abstract void ZoomInStart();

        public abstract void ZoomOutStart();

        public abstract void ZoomStop();

        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.CameraZoomContinuous;
            return setting;
        }
    }
}
