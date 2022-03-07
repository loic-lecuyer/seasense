using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Enums;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorColorModeCapability : SwitchValueCapability, ISeamosCapability {
        private SeamosThermalCamera camera;
        private bool ignoreHardwareResponse = false;


        public SeamosCameraThorColorModeCapability(SeamosThermalCamera camera) {
            this.camera = camera;
            this.Values = SwitchValue.FromEnum<ColorMode>();

        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.ColorMode;
            }


        }



        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            ICameraSetColorModeRequest request = this.camera.Unit.Protocol.Resolve<ICameraSetColorModeRequest>(MaterialTarget.ThermalCamera);
            ColorMode mode = value.Value.ToEnum<ColorMode>();
            request.ColorMode = (byte)mode;
            this.camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (this.ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                ColorMode responseMode = (ColorMode)response.ColorRepresentation;
                this.Value = (from v in Values where v.Value.Equals(responseMode.ToString()) select v).FirstOrDefault();
            }
        }
    }
}
