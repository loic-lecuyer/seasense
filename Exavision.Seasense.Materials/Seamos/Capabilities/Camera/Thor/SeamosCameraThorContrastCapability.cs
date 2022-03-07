using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorContrastCapability : DoubleValueCapability, ISeamosCapability {
        private bool ignoreHardwareResponse = false;
        public SeamosCameraThorContrastCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 30;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Contrast;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.Contrast;
            }

        }

        public override void SetValue(double value) {
            ignoreHardwareResponse = true;
            base.SetValue(value);
            ICameraSetContrastRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetContrastRequest>(MaterialTarget.ThermalCamera);
            request.Contrast = this.Value;
            this.Camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;


        }

    }
}
