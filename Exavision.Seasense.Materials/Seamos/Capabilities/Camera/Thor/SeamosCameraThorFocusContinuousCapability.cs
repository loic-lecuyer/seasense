using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;
namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorFocusContinuousCapability : CameraFocusContinuousCapability {
        private readonly SeamosThermalCamera camera;


        public SeamosCameraThorFocusContinuousCapability(SeamosThermalCamera camera) {
            this.camera = camera;
        }

        public override void FocusInStart() {
            ICameraFocusPlusContinuousRequest request = this.camera.Unit.Protocol.Resolve<ICameraFocusPlusContinuousRequest>(MaterialTarget.ThermalCamera);
            request.SystemTarget = SystemTarget.ElectronicCard;
            request.MaterialTarget = MaterialTarget.ThermalCamera;
            this.camera.Unit.Client.Send(request);
        }

        public override void FocusOutStart() {
            ICameraFocusMinusContinuousRequest request = this.camera.Unit.Protocol.Resolve<ICameraFocusMinusContinuousRequest>(MaterialTarget.ThermalCamera);
            request.SystemTarget = SystemTarget.ElectronicCard;
            request.SystemTarget = SystemTarget.ElectronicCard;
            request.MaterialTarget = MaterialTarget.ThermalCamera;
            this.camera.Unit.Client.Send(request);
        }

        public override void FocusStop() {
            ICameraStopRequest request = this.camera.Unit.Protocol.Resolve<ICameraStopRequest>(MaterialTarget.ThermalCamera);
            request.SystemTarget = SystemTarget.ElectronicCard;
            request.MaterialTarget = MaterialTarget.ThermalCamera;
            this.camera.Unit.Client.Send(request);
        }


    }
}
