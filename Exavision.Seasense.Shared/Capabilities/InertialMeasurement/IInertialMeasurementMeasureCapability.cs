using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.InertialMeasurement {
    public interface IInertialMeasurementMeasureCapability : ICapability {
        public double AngleX {get;}
        public double AngleY { get; }
        public double AngleZ { get; }
    }
}
