using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Materials.Nemosys.Capabilities.Camera {
    public class SettingPelcoCameraAbsoluteZoomPositionCapability : SettingCapability {
        public double MinHorizontalFieldOfView { get; set; }
        public double MaxHorizontalFieldOfView { get; set; }
    }
}
