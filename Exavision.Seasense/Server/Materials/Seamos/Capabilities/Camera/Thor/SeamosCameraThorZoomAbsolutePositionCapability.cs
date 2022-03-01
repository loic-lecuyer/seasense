using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorZoomAbsolutePositionCapability : CameraZoomAbsolutePositionCapability<SettingSeamosCameraThorZoomAbsolutePositionCapability>, ISeamosCapability {
        private readonly SeamosThermalCamera camera;

        public SeamosCameraThorZoomAbsolutePositionCapability(SeamosThermalCamera camera) {
            this.camera = camera;
        }

        public override SettingSeamosCameraThorZoomAbsolutePositionCapability GetSetting(SettingSeamosCameraThorZoomAbsolutePositionCapability setting) {
            return new SettingSeamosCameraThorZoomAbsolutePositionCapability();
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is ICameraGetValuesResponse response) {

            }
        }
    }
}
