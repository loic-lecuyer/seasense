﻿using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Spinnaker.Shared.Models;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeBlackLevelCapability : DoubleValueCapability, ISeamosGigeCapability {

        public SeamosCameraGigeBlackLevelCapability(SeamosDayCamera camera) {
            this.Camera = camera;
            this.MinValue = 0;
            this.MaxValue = 100;
        }
        public override DoubleValueType DoubleValueType => DoubleValueType.BlackLevel;

        public SeamosDayCamera Camera { get; }




        public void ProcessHarwareResponseValues(Values values) {
            this.Value = values.BlackLevel.Value;
        }

        public override void SetValue(double value) {
            base.SetValue(value);
            this.Camera.SpinnakerValues.BlackLevel = new Spinnaker.Shared.Models.BlackLevel() { Value = this.Value };
            this.Camera.SendValues();

        }

    }
}