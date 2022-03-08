using Exavision.Seasense.Protocols.Spinnaker.Models;
using Exavision.Seasense.Shared.Capabilities;
using Serilog;
using System.Threading.Tasks;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeGammaCapability : DoubleValueCapability, ISeamosGigeCapability {

        public SeamosCameraGigeGammaCapability(SeamosDayCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Gamma;

        public SeamosDayCamera Camera { get; }




        public void ProcessHarwareResponseValues(Values values) {
            this.Value = values.Gamma.Value;
        }

        public override void SetValue(double value) {
            base.SetValue(value);
            this.Camera.SpinnakerValues.Gamma.Value = value;
            this.Camera.SendValues().ContinueWith((Task task) => { Log.Error("Error in " + this.GetType().Name + " when set value : " + task.Exception.Message); }, TaskContinuationOptions.OnlyOnFaulted);

        }

    }
}
