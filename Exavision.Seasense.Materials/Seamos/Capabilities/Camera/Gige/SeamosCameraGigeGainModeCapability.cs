using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Spinnaker.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeGainModeCapability : SwitchValueCapability, ISeamosGigeCapability {
        private SeamosDayCamera camera;

        public SeamosCameraGigeGainModeCapability(SeamosDayCamera camera) {
            this.camera = camera;
            this.Values = SwitchValue.FromEnum<GainMode>();
          
        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.GainMode;
            }

           
        }
        private bool ignoreHardwareResponse = false;
        public void ProcessHarwareResponseValues(Values values) {
            if (ignoreHardwareResponse) return;
            this.Value = (from v in this.Values where v.Value.Equals(values.Gain.Mode.ToString()) select v).FirstOrDefault();
        }

        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            if (Enum.TryParse(value.Value, out GainMode gainMode)) {
                this.camera.SpinnakerValues.Gain.Mode = gainMode;
                this.camera.SendValues().Wait();
            }
            base.SetValue(value);
            ignoreHardwareResponse = false;
        }

    }
}
