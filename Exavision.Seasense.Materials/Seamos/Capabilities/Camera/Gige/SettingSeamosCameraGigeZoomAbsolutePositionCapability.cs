using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Camera.Gige {
    public class SettingSeamosCameraGigeZoomAbsolutePositionCapability : SettingCapability {
        public double MinHorizontalFieldOfView { get; set; } = 0.21;
        public double MaxHorizontalFieldOfView { get; set; } = 18;
    }
}
