using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraFocusContinuousCapability : Capability<SettingCapabilityEmpty>, ICameraFocusContinuousCapability {
        public abstract void FocusInStart();

        public abstract void FocusOutStart();

        public abstract void FocusStop();

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.CameraFocusContinuous;
            return setting;
        }
    }
}
