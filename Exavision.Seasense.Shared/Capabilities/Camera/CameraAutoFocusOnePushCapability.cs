using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraAutoFocusOnePushCapability<S> : Capability<S>, ICameraAutoFocusOnePushCapability where S : SettingCapability, new() {
        public abstract void AutoFocusOnePush();

        public override S GetSetting(S setting) {
            setting.CapabilityType = CapabilityType.CameraAutoFocusOnePush;
            return setting;
        }

    }
}
