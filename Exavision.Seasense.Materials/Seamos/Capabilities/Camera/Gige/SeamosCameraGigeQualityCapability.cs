using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Spinnaker.Shared.Models;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeQualityCapability : DoubleValueCapability<SettingSeamosCameraGigeQualityCapability>, ISeamosGigeCapability {

        public SeamosCameraGigeQualityCapability(SeamosDayCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Quality;

        public SeamosDayCamera Camera { get; }

        public void ProcessHarwareResponseValues(Values values) {
            this.Value = values.Quality.Value;
        }

        public override void SetValue(double value) {
            base.SetValue(value);
            this.Camera.SpinnakerValues.Quality = new Spinnaker.Shared.Models.Quality() { Value = this.Value };
            this.Camera.SendValues();

        }

    }
}
