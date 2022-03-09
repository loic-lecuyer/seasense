using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Models;
using Serilog;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorZoomAbsolutePositionCapability : CameraZoomAbsolutePositionCapability<SettingSeamosCameraThorZoomAbsolutePositionCapability>, ISeamosCapability {
        private readonly SeamosThermalCamera camera;
        private IntRect zoomRoi = null;
        public double MinHorizontalFieldOfView { get; private set; }
        public double MaxHorizontalFieldOfView { get; private set; }

        public SeamosCameraThorZoomAbsolutePositionCapability(SeamosThermalCamera camera) {
            this.camera = camera;
        }

        public override double HorizontalFieldOfView {
            get {
                return this.MaxHorizontalFieldOfView / this.ZoomMultiplier;

            }
        }

        public override double ZoomMultiplier {
            get {
                if (this.zoomRoi == null) return 1;
                return (double)this.camera.ImageWidth / (double)this.zoomRoi.Width;
            }
        }

        public override SettingSeamosCameraThorZoomAbsolutePositionCapability GetSetting(SettingSeamosCameraThorZoomAbsolutePositionCapability setting) {
            base.GetSetting(setting);
            return setting;
        }

        public override void SetSetting(SettingSeamosCameraThorZoomAbsolutePositionCapability setting) {
            base.SetSetting(setting);
            this.MaxHorizontalFieldOfView = setting.MaxHorizontalFieldOfView;
            this.MinHorizontalFieldOfView = setting.MinHorizontalFieldOfView;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is ICameraGetValuesResponse response) {
                if (response.RoiZoomEnable) {
                    Log.Information("Thor Update Zoom " + response.RoiZoomWidth);
                    this.zoomRoi = new IntRect() { X = response.RoiZoomX, Y = response.RoiZoomY, Width = response.RoiZoomWidth, Height = response.RoiZoomHeight };

                }
                else {
                    Log.Information("Thor Update Zoom to no ");
                    this.zoomRoi = null;
                }
            }
        }
    }
}
