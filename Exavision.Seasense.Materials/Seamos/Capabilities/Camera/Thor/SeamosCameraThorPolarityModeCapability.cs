using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Enums;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorPolarityModeCapability : SwitchValueCapability, ISeamosCapability {
        private SeamosThermalCamera camera;
        private bool ignoreHardwareResponse = false;

        public SeamosCameraThorPolarityModeCapability(SeamosThermalCamera camera) {
            this.camera = camera;
            this.Values = SwitchValue.FromEnum<Polarity>();

        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.PolarityMode;
            }


        }




        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            ICameraSetPolarityRequest request = this.camera.Unit.Protocol.Resolve<ICameraSetPolarityRequest>(MaterialTarget.ThermalCamera);
            if (value.Value.Equals(Polarity.BlackHot.ToString())) {
                request.IsWhiteHot = false;
                base.SetValue(value);
                this.camera.Unit.Client.Send(request);
            }
            else if (value.Value.Equals(Polarity.WhiteHot.ToString())) {
                request.IsWhiteHot = true;
                base.SetValue(value);
                this.camera.Unit.Client.Send(request);
            }

            ignoreHardwareResponse = false;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (this.ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                if (response.Polarity) {
                    this.Value = (from v in Values where v.Value.Equals(Polarity.WhiteHot.ToString()) select v).FirstOrDefault();
                }
                else {
                    this.Value = (from v in Values where v.Value.Equals(Polarity.BlackHot.ToString()) select v).FirstOrDefault();
                }
            }
        }
    }
}
