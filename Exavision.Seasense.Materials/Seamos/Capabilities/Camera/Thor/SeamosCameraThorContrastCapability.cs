using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Capabilities;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorContrastCapability : DoubleValueCapability, ISeamosCapability {

        public SeamosCameraThorContrastCapability(SeamosThermalCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 255;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Contrast;

        public SeamosThermalCamera Camera { get; }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is ICameraGetValuesResponse response) {
                this.Value = response.Contrast;
            }

        }

        public override void SetValue(double value) {
            base.SetValue(value);
            ICameraSetContrastRequest request = this.Camera.Unit.Protocol.Resolve<ICameraSetContrastRequest>(MaterialTarget.ThermalCamera);
            request.Contrast = this.Value;
            this.Camera.Unit.Client.Send(request);


        }

    }
}
