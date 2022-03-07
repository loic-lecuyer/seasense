using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Enums;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorReticuleModeCapability : SwitchValueCapability, ISeamosCapability {
        private SeamosThermalCamera camera;
        private bool ignoreHardwareResponse = false;


        public SeamosCameraThorReticuleModeCapability(SeamosThermalCamera camera) {
            this.camera = camera;
            this.Values = SwitchValue.FromEnum<ReticuleMode>();

        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.ReticuleMode;
            }


        }



        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            ReticuleMode mode = value.Value.ToEnum<ReticuleMode>();
            if (mode == ReticuleMode.Off) {
                ICameraSetReticuleEnabedRequest requestVisiblility = this.camera.Unit.Protocol.Resolve<ICameraSetReticuleEnabedRequest>(MaterialTarget.ThermalCamera);
                requestVisiblility.IsVisible = false;
                this.camera.Unit.Client.Send(requestVisiblility);
            }
            else {
                ICameraSetReticuleEnabedRequest requestVisiblility = this.camera.Unit.Protocol.Resolve<ICameraSetReticuleEnabedRequest>(MaterialTarget.ThermalCamera);
                requestVisiblility.IsVisible = true;
                this.camera.Unit.Client.Send(requestVisiblility);

                ICameraSetReticuleModeRequest requestReticuleMode = this.camera.Unit.Protocol.Resolve<ICameraSetReticuleModeRequest>(MaterialTarget.ThermalCamera);
                requestReticuleMode.Mode = mode;
                this.camera.Unit.Client.Send(requestReticuleMode);
            }

            ICameraSetShutterEnabledRequest request = this.camera.Unit.Protocol.Resolve<ICameraSetShutterEnabledRequest>(MaterialTarget.ThermalCamera);

            this.camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (this.ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                if (response.Reticule) {
                    this.Value = (from v in Values where v.Value.Equals(ReticuleMode.Off.ToString()) select v).FirstOrDefault();
                }
                else {
                    ReticuleMode mode = (ReticuleMode)response.ReticuleMode;
                    this.Value = (from v in Values where v.Value.Equals(mode.ToString()) select v).FirstOrDefault();
                }
            }
        }
    }
}
