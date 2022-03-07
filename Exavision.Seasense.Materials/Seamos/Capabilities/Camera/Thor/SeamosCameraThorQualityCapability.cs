using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorQualityCapability : DoubleValueCapability, ISeamosCapability {
        private bool ignoreHardwareResponse = false;

        public SeamosCameraThorQualityCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Quality;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.ImageQuality;
            }

        }

        public override void SetValue(double value) {
            ignoreHardwareResponse = true;
            base.SetValue(value);
            ICameraSetQualityRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetQualityRequest>(MaterialTarget.ThermalCamera);
            request.Quality = this.Value;
            this.Camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;


        }

    }
}
