using Exavision.Seasense.Protocols.Spinnaker.Models;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeWhiteBalanceModeCapability : SwitchValueCapability, ISeamosGigeCapability {
        private SeamosDayCamera camera;

        public SeamosCameraGigeWhiteBalanceModeCapability(SeamosDayCamera camera) {
            this.camera = camera;
            this.Values = SwitchValue.FromEnum<WhiteBalanceMode>();

        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.WhiteBalanceMode;
            }


        }

        private bool ignoreHardwareResponse = false;
        public void ProcessHarwareResponseValues(Values values) {
            if (ignoreHardwareResponse) return;
            this.Value = (from v in this.Values where v.Value.Equals(values.WhiteBalance.Mode.ToString()) select v).FirstOrDefault();
        }

        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            if (Enum.TryParse(value.Value, out WhiteBalanceMode whiteBalanceMode)) {
                this.camera.SpinnakerValues.WhiteBalance.Mode = whiteBalanceMode;
                this.camera.SendValues().Wait();
            }
            base.SetValue(value);
            ignoreHardwareResponse = false;
        }

    }
}
