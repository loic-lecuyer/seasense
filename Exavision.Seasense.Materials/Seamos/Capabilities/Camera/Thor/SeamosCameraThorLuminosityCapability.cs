using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorLuminosityCapability : DoubleValueCapability, ISeamosCapability {
        private bool ignoreHardwareResponse = false;
        public SeamosCameraThorLuminosityCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Luminosity;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.Luminosity;
            }

        }

        public override void SetValue(double value) {
            ignoreHardwareResponse = true;
            base.SetValue(value);
            ICameraSetLuminosityRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetLuminosityRequest>(MaterialTarget.ThermalCamera);
            request.Lunimosity = this.Value;
            this.Camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;


        }

    }
}
