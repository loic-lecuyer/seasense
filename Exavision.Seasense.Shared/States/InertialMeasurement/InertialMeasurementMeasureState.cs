using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.States.InertialMeasurement {
    public class InertialMeasurementMeasureState : CapabilityState {
        public double AngleX { get; set; }
        public double AngleY{ get; set; }
        public double AngleZ { get; set; }
    }
}
