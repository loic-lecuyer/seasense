using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorLuminosityCapability : DoubleValueCapability, ISeamosCapability {

        public SeamosCameraThorLuminosityCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 255;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Luminosity;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.Luminosity;
            }

        }

        public override void SetValue(double value) {
            base.SetValue(value);
            ICameraSetLuminosityRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetLuminosityRequest>(MaterialTarget.ThermalCamera);
            request.Lunimosity = this.Value;
            this.Camera.Unit.Client.Send(request);


        }

    }
}
