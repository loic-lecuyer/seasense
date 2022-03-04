﻿using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Spinnaker.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public class SeamosCameraGigeExposureTimeModeCapability : SwitchValueCapability, ISeamosGigeCapability {
        private SeamosDayCamera camera;

        public SeamosCameraGigeExposureTimeModeCapability(SeamosDayCamera camera) {
            this.camera = camera;
            this.Values = new List<SwitchValue>();
            this.Values.Add(new SwitchValue() {
                DisplayName = "Off",
                Value = "Off"
            });
            this.Values.Add(new SwitchValue() {
                DisplayName = "Continuous",
                Value = "Continuous"
            });
            this.Values.Add(new SwitchValue() {
                DisplayName = "Once",
                Value = "Once"
            });
        }
        private bool ignoreHardwareResponse = false;
        public void ProcessHarwareResponseValues(Values values) {
            if (ignoreHardwareResponse) return;
            this.Value = (from v in this.Values where v.Value.Equals(values.ExposureTime.Mode.ToString()) select v).FirstOrDefault();
        }

        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            if (Enum.TryParse(value.Value, out ExposureTimeMode exposureTimeMode)) {
                this.camera.SpinnakerValues.ExposureTime.Mode = exposureTimeMode;
                this.camera.SendValues().Wait();
            }
            base.SetValue(value);
            ignoreHardwareResponse = false;
        }

    }
}
