using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraAutoFocusOnePushCapability : Capability<SettingCapabilityEmpty>, ICameraAutoFocusOnePushCapability {
        public abstract void AutoFocusOnePush();

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.CameraAutoFocusOnePush;
            return setting;
        }

    }
}
