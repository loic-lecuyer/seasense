using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraZoomContinuousCapability : Capability<SettingCapabilityEmpty>, ICameraZoomContinuousCapability {
        public abstract void ZoomInStart();

        public abstract void ZoomOutStart();

        public abstract void ZoomStop();

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.CameraZoomContinuous;
            return setting;
        }
    }
}
