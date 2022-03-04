using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Spinnaker.Shared.Models;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeExposureTimeCapability : DoubleValueCapability, ISeamosGigeCapability {

        public SeamosCameraGigeExposureTimeCapability(SeamosDayCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.ExposureTime;

        public SeamosDayCamera Camera { get; }


        public void ProcessHarwareResponseValues(Values values) {
            this.Value = values.ExposureTime.Value;
        }

        public override void SetValue(double value) {
            base.SetValue(value);
            this.Camera.SpinnakerValues.ExposureTime.Value = value;
            this.Camera.SendValues();

        }

    }
}
