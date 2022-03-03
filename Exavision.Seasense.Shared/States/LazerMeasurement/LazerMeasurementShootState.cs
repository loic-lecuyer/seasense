using System;

namespace Exavision.Seasense.Shared.States.LazerMeasurement {
    public class LazerMeasurementShootState : CapabilityState {
        public bool IsOn { get; set; }
        public Nullable<DateTime> LastShootDate { get; set; }
        public string ErrorCode { get; set; }
        public Nullable<Double> LastShootDistance { get; set; }
    }
}
