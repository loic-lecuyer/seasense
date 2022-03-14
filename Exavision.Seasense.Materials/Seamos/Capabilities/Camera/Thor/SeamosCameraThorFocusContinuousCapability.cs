using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Models;
using Serilog;
using System.Threading;
using System.Threading.Tasks;
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
            ICameraFocusStopRequest request = this.camera.Unit.Protocol.Resolve<ICameraFocusStopRequest>(MaterialTarget.ThermalCamera);
            request.SystemTarget = SystemTarget.ElectronicCard;
            request.MaterialTarget = MaterialTarget.ThermalCamera;
            this.camera.Unit.Client.Send(request);
        }


    }
}
