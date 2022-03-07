using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Enums;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorShutterModeCapability : SwitchValueCapability, ISeamosCapability {
        private SeamosThermalCamera camera;
        private bool ignoreHardwareResponse = false;


        public SeamosCameraThorShutterModeCapability(SeamosThermalCamera camera) {
            this.camera = camera;
            this.Values = SwitchValue.FromEnum<ShutterMode>();

        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.ShutterMode;
            }


        }



        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            ICameraSetShutterEnabledRequest request = this.camera.Unit.Protocol.Resolve<ICameraSetShutterEnabledRequest>(MaterialTarget.ThermalCamera);
            ShutterMode mode = value.Value.ToEnum<ShutterMode>();
            request.IsEnabled = mode == ShutterMode.Open;
            this.camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (this.ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                if (response.ShutterInfo.HasShutter && response.ShutterInfo.IsShutterOpen) {
                    this.Value = (from v in Values where v.Value.Equals(ShutterMode.Open.ToString()) select v).FirstOrDefault();
                }
                else {
                    this.Value = (from v in Values where v.Value.Equals(ShutterMode.Close.ToString()) select v).FirstOrDefault();
                }
            }
        }
    }
}
