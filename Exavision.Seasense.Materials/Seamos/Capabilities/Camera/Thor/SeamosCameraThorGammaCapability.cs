using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorGammaCapability : DoubleValueCapability, ISeamosCapability {
        private bool ignoreHardwareResponse = false;
        public SeamosCameraThorGammaCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 2000;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Gamma;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.Gamma;
            }

        }

        public override void SetValue(double value) {
            ignoreHardwareResponse = true;
            base.SetValue(value);
            ICameraSetGammaRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetGammaRequest>(MaterialTarget.ThermalCamera);
            request.Gamma = this.Value;
            this.Camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;


        }

    }
}
