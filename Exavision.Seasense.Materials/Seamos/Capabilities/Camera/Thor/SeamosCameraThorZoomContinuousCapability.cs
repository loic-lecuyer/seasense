using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Models;
using Serilog;
using System.Threading;
using System.Threading.Tasks;
namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorZoomContinuousCapability : CameraZoomContinuousCapability, ISeamosCapability {
        private readonly SeamosThermalCamera camera;
        private CancellationTokenSource cancellerZoomIn;
        private CancellationTokenSource cancellerZoomOut;

        public SeamosCameraThorZoomContinuousCapability(SeamosThermalCamera camera) {
            this.camera = camera;
        }


        public void ProcessHardwareResponse(ISeamosCommand command) {

        }

        public override void ZoomInStart() {
            this.cancellerZoomIn = new CancellationTokenSource();
            Task.Factory.StartNew(ZoomInLoop, this.cancellerZoomIn.Token);
        }

        private async Task ZoomInLoop() {
            ICameraZoomAbsolutePositionCapability zoomPosition = this.camera.GetCapability<ICameraZoomAbsolutePositionCapability>();

            double zoomMultiplier = zoomPosition.ZoomMultiplier;
            while (!this.cancellerZoomIn.IsCancellationRequested) {
                zoomMultiplier += 0.1;
                if (zoomMultiplier > 20) {
                    zoomMultiplier = 20;
                    break;
                }
                IntRect zoomRoi = new IntRect() {
                    Width = (int)((double)this.camera.ImageWidth / zoomMultiplier),
                    Height = (int)((double)this.camera.ImageHeight / zoomMultiplier),

                };
                zoomRoi.X = (this.camera.ImageWidth - zoomRoi.Width) / 2;
                zoomRoi.Y = (this.camera.ImageHeight - zoomRoi.Height) / 2;
                this.SendZoom(zoomRoi);
                Log.Information("Send Zoom In Loop width " + zoomRoi.Width + " zoom multiplier " + zoomMultiplier);
                await Task.Delay(100, cancellerZoomIn.Token);
            }
        }

        private void SendZoom(IntRect zoomRoi) {
            ICameraSetZoneZoomRequest requestZoomZone = this.camera.Unit.Protocol.Resolve<ICameraSetZoneZoomRequest>(MaterialTarget.ThermalCamera);
            requestZoomZone.X = zoomRoi.X;
            requestZoomZone.Y = zoomRoi.Y;
            requestZoomZone.Width = zoomRoi.Width;
            requestZoomZone.Height = zoomRoi.Height;
            this.camera.Unit.Client.Send(requestZoomZone);
            ICameraSetZoneZoomEnabledRequest requestZoomZoneEnable = this.camera.Unit.Protocol.Resolve<ICameraSetZoneZoomEnabledRequest>(MaterialTarget.ThermalCamera);
            requestZoomZoneEnable.IsEnabled = true;
            this.camera.Unit.Client.Send(requestZoomZoneEnable);

        }

        public override void ZoomOutStart() {
            this.cancellerZoomOut = new CancellationTokenSource();
            Task.Factory.StartNew(ZoomOutLoop, this.cancellerZoomOut.Token);

        }

        private async Task ZoomOutLoop() {
            ICameraZoomAbsolutePositionCapability zoomPosition = this.camera.GetCapability<ICameraZoomAbsolutePositionCapability>();

            double zoomMultiplier = zoomPosition.ZoomMultiplier;
            while (!this.cancellerZoomOut.IsCancellationRequested) {
                zoomMultiplier -= 0.1;
                if (zoomMultiplier < 1) {
                    zoomMultiplier = 1;
                    break;
                }
                IntRect zoomRoi = new IntRect() {
                    Width = (int)(this.camera.ImageWidth / zoomMultiplier),
                    Height = (int)(this.camera.ImageHeight / zoomMultiplier),

                };
                zoomRoi.X = (this.camera.ImageWidth - zoomRoi.Width) / 2;
                zoomRoi.Y = (this.camera.ImageHeight - zoomRoi.Height) / 2;
                Log.Information("Send Zoom Out Loop width " + zoomRoi.Width + " multiplier " + zoomMultiplier);
                this.SendZoom(zoomRoi);
                await Task.Delay(100, cancellerZoomOut.Token);
            }
        }

        public override void ZoomStop() {
            this.cancellerZoomIn?.Cancel();
            this.cancellerZoomOut?.Cancel();
        }
    }
}
