using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Models;
using System.Threading;
using System.Threading.Tasks;
namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorZoomContinuousCapability : CameraZoomContinuousCapability<SettingSeamosCameraThorZoomContinuousCapability>, ISeamosCapability {
        private readonly SeamosThermalCamera camera;
        private CancellationTokenSource cancellerZoomIn;
        private CancellationTokenSource cancellerZoomOut;

        public SeamosCameraThorZoomContinuousCapability(SeamosThermalCamera camera) {
            this.camera = camera;
        }
        public override SettingSeamosCameraThorZoomContinuousCapability GetSetting(SettingSeamosCameraThorZoomContinuousCapability setting) {
            base.GetSetting(setting);
            return setting;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {

        }

        public override void ZoomInStart() {
            this.cancellerZoomIn = new CancellationTokenSource();
            Task.Factory.StartNew(ZoomInLoop, this.cancellerZoomIn.Token);
        }

        private async Task ZoomInLoop() {
            ICameraZoomAbsolutePositionCapability zoomPosition = this.camera.GetCapability<ICameraZoomAbsolutePositionCapability>();

            while (!this.cancellerZoomIn.IsCancellationRequested) {
                double zoomMultiplier = zoomPosition.ZoomMultiplier + 0.1;
                if (zoomMultiplier > 20) zoomMultiplier = 20;
                IntRect zoomRoi = new IntRect() {
                    Width = (int)(this.camera.ImageWidth / zoomMultiplier),
                    Height = (int)(this.camera.ImageHeight / zoomMultiplier),

                };
                zoomRoi.X = (this.camera.ImageWidth - zoomRoi.Width) / 2;
                zoomRoi.Y = (this.camera.ImageHeight - zoomRoi.Height) / 2;
                this.SendZoom(zoomRoi);
                await Task.Delay(100, cancellerZoomIn.Token);
            }
        }

        private void SendZoom(IntRect zoomRoi) {
            ICameraSetZoneZoomRequest requestZoomZone = this.camera.Unit.Protocol.Resolve<ICameraSetZoneZoomRequest>(MaterialTarget.ThermalCamera);
            requestZoomZone.X = zoomRoi.X;
            requestZoomZone.Y = zoomRoi.Y;
            requestZoomZone.Width = zoomRoi.Width;
            requestZoomZone.Height = zoomRoi.Height;
            byte[] commandBytesRequestZoomZone = this.camera.Unit.Protocol.Serialize(requestZoomZone);
            string dataRequestZoomZone = commandBytesRequestZoomZone.ToHexString();
            this.camera.Unit.Client.Send(dataRequestZoomZone);

            ICameraSetZoneZoomEnabledRequest requestZoomZoneEnable = this.camera.Unit.Protocol.Resolve<ICameraSetZoneZoomEnabledRequest>(MaterialTarget.ThermalCamera);
            requestZoomZoneEnable.IsEnabled = true;
            byte[] commandBytesRequestZoomEnabled = this.camera.Unit.Protocol.Serialize(requestZoomZone);
            string dataRequestZoomZoneEnabled = commandBytesRequestZoomEnabled.ToHexString();
            this.camera.Unit.Client.Send(dataRequestZoomZoneEnabled);
        }

        public override void ZoomOutStart() {
            this.cancellerZoomOut = new CancellationTokenSource();
            Task.Factory.StartNew(ZoomOutLoop, this.cancellerZoomIn.Token);

        }

        private async Task ZoomOutLoop() {
            ICameraZoomAbsolutePositionCapability zoomPosition = this.camera.GetCapability<ICameraZoomAbsolutePositionCapability>();

            while (!this.cancellerZoomOut.IsCancellationRequested) {
                double zoomMultiplier = zoomPosition.ZoomMultiplier - 0.1;
                if (zoomMultiplier < 1) zoomMultiplier = 1;
                IntRect zoomRoi = new IntRect() {
                    Width = (int)(this.camera.ImageWidth / zoomMultiplier),
                    Height = (int)(this.camera.ImageHeight / zoomMultiplier),

                };
                zoomRoi.X = (this.camera.ImageWidth - zoomRoi.Width) / 2;
                zoomRoi.Y = (this.camera.ImageHeight - zoomRoi.Height) / 2;
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
