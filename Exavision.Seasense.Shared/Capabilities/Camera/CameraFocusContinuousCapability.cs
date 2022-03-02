using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraFocusContinuousCapability<S> : Capability<S>, ICameraFocusContinuousCapability where S : SettingCapability, new() {
        public abstract void FocusInStart();

        public abstract void FocusOutStart();

        public abstract void FocusStop();

        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.CameraFocusContinuous;
            return setting;
        }
    }
}
