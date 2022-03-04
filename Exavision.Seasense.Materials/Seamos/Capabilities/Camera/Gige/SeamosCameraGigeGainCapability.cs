using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Spinnaker.Shared.Models;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeGainCapability : DoubleValueCapability, ISeamosGigeCapability {

        public SeamosCameraGigeGainCapability(SeamosDayCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Gain;

        public SeamosDayCamera Camera { get; }


        public void ProcessHarwareResponseValues(Values values) {
            this.Value = values.Gain.Value;
        }

        public override void SetValue(double value) {
            base.SetValue(value);
            this.Camera.SpinnakerValues.Gain.Value = value;
            this.Camera.SendValues();

        }

    }
}
