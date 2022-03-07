using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SettingSeamosCameraGigeZoomAbsolutePositionCapability : SettingCapability {
        public double MinHorizontalFieldOfView { get; set; } = 4.84;
        public double MaxHorizontalFieldOfView { get; set; } = 13.76;
    }
}
