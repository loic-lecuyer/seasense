using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Spinnaker.Shared.Models;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeZoomAbsolutePositionCapability : CameraZoomAbsolutePositionCapability<SettingSeamosCameraGigeZoomAbsolutePositionCapability>, ISeamosGigeCapability {
        private readonly SeamosDayCamera camera;
        private IntRect zoomRoi = null;
        public double MinHorizontalFieldOfView { get; private set; }
        public double MaxHorizontalFieldOfView { get; private set; }

        public SeamosCameraGigeZoomAbsolutePositionCapability(SeamosDayCamera camera) {
            this.camera = camera;
        }

        public override double HorizontalFieldOfView {
            get {
                return this.MaxHorizontalFieldOfView / this.ZoomMultiplier;

            }
        }
        private double zoomMultiplier = 1;
        public override double ZoomMultiplier {
            get {

                return zoomMultiplier;
            }
        }

        public override SettingSeamosCameraGigeZoomAbsolutePositionCapability GetSetting(SettingSeamosCameraGigeZoomAbsolutePositionCapability setting) {
            base.GetSetting(setting);
            return setting;
        }

        public override void SetSetting(SettingSeamosCameraGigeZoomAbsolutePositionCapability setting) {
            base.SetSetting(setting);
            this.MaxHorizontalFieldOfView = setting.MaxHorizontalFieldOfView;
            this.MinHorizontalFieldOfView = setting.MinHorizontalFieldOfView;
        }

        public void ProcessHarwareResponseValues(Values values) {
            if (values != null && values.Zoom != null) {
                this.zoomMultiplier = values.Zoom.Value;
            }

        }
    }
}
