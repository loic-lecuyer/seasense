using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorGammaCapability : DoubleValueCapability, ISeamosCapability {

        public SeamosCameraThorGammaCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 255;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Gamma;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.Gamma;
            }

        }

        public override void SetValue(double value) {
            base.SetValue(value);
            ICameraSetGammaRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetGammaRequest>(MaterialTarget.ThermalCamera);
            request.Gamma = this.Value;
            this.Camera.Unit.Client.Send(request);


        }

    }
}
