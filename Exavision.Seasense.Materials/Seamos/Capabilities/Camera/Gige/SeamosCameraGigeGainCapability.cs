using Exavision.Seasense.Protocols.Spinnaker.Models;
using Exavision.Seasense.Shared.Capabilities;
using Serilog;
using System.Threading.Tasks;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeGainCapability : DoubleValueCapability, ISeamosGigeCapability {

        public SeamosCameraGigeGainCapability(SeamosDayCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 47;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.Gain;

        public SeamosDayCamera Camera { get; }


        public void ProcessHarwareResponseValues(Values values) {
            this.Value = values.Gain.Value;
        }

        public override void SetValue(double value) {
            base.SetValue(value);
            this.Camera.SpinnakerValues.Gain.Value = value;
            this.Camera.SendValues().ContinueWith((Task task) => { Log.Error("Error in " + this.GetType().Name + " when set value : " + task.Exception.Message); }, TaskContinuationOptions.OnlyOnFaulted);

        }

    }
}
