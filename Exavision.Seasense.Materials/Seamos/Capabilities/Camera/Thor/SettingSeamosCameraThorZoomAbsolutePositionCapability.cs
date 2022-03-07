using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SettingSeamosCameraThorZoomAbsolutePositionCapability : SettingCapability {
        public double MinHorizontalFieldOfView { get; set; } = 3.28;
        public double MaxHorizontalFieldOfView { get; set; } = 7.32;
    }
}
