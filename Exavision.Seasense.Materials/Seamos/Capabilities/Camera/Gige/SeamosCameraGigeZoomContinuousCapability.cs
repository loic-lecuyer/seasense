using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Spinnaker.Shared.Models;
using System.Threading;
using System.Threading.Tasks;
namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeZoomContinuousCapability : CameraZoomContinuousCapability, ISeamosGigeCapability {
        private readonly SeamosDayCamera camera;


        public SeamosCameraGigeZoomContinuousCapability(SeamosDayCamera camera) {
            this.camera = camera;
        }


        public void ProcessHardwareResponse(ISeamosCommand command) {

        }
        private CancellationTokenSource cancellerZoomIn;
        private CancellationTokenSource cancellerZoomOut;

        public override void ZoomInStart() {
            this.cancellerZoomIn = new CancellationTokenSource();
            Task.Factory.StartNew(ZoomInLoop, this.cancellerZoomIn.Token);
        }

        private async Task ZoomInLoop() {
            ICameraZoomAbsolutePositionCapability zoomPosition = this.camera.GetCapability<ICameraZoomAbsolutePositionCapability>();
            double zoomMultiplier = zoomPosition.ZoomMultiplier;
            while (!this.cancellerZoomIn.IsCancellationRequested) {
                zoomMultiplier = zoomMultiplier + 0.1;

                if (zoomMultiplier > 20) { zoomMultiplier = 20; break; }
                if (zoomMultiplier < 1) { zoomMultiplier = 1; break; }
                this.camera.SpinnakerValues.Zoom.Value = zoomMultiplier;
                await this.camera.SendValues();
                await Task.Delay(100);
            }
        }



        public override void ZoomOutStart() {
            this.cancellerZoomOut = new CancellationTokenSource();
            Task.Factory.StartNew(ZoomOutLoop, this.cancellerZoomOut.Token);

        }

        private async Task ZoomOutLoop() {
            ICameraZoomAbsolutePositionCapability zoomPosition = this.camera.GetCapability<ICameraZoomAbsolutePositionCapability>();
            double zoomMultiplier = zoomPosition.ZoomMultiplier;
            while (!this.cancellerZoomOut.IsCancellationRequested) {
                zoomMultiplier = zoomMultiplier - 0.1;
                if (zoomMultiplier > 20) { zoomMultiplier = 20; break; }
                if (zoomMultiplier < 1) { zoomMultiplier = 1; break; }
                this.camera.SpinnakerValues.Zoom.Value = zoomMultiplier;
                await this.camera.SendValues();
                await Task.Delay(100);
            }
        }

        public override void ZoomStop() {
            this.cancellerZoomIn?.Cancel();
            this.cancellerZoomOut?.Cancel();
        }

        public void ProcessHarwareResponseValues(Values values) {

        }
    }
}
