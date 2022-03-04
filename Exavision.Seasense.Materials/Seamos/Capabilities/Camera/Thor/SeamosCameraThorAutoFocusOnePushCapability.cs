using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorAutoFocusOnePushCapability : CameraAutoFocusOnePushCapability {
        private SeamosThermalCamera camera;

        public SeamosCameraThorAutoFocusOnePushCapability(SeamosThermalCamera camera) {
            this.camera = camera;
        }



        public override void AutoFocusOnePush() {
            ICameraSetZoneFocusRequest request = this.camera.Unit.Protocol.Resolve<ICameraSetZoneFocusRequest>(MaterialTarget.ThermalCamera);
            request.X = 0.25 * this.camera.ImageWidth;
            request.Y = 0.25 * this.camera.ImageHeight;
            request.Width = 0.5 * this.camera.ImageWidth;
            request.Height = 0.5 * this.camera.ImageHeight;
            request.X = request.X.Clamp(0, this.camera.ImageWidth - 1);
            request.Y = request.Y.Clamp(0, this.camera.ImageHeight - 1);
            request.Width = request.Width.Clamp(0, this.camera.ImageWidth - 1 - request.X);
            request.Height = request.Height.Clamp(0, this.camera.ImageHeight - 1 - request.Y);
            request.IsEnabled = true;
            this.camera.Unit.SendCommand(request);
        }


    }
}
