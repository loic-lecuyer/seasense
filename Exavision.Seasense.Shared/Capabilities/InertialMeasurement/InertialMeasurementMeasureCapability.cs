using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.InertialMeasurement {
    public abstract class InertialMeasurementMeasureCapability : Capability<SettingCapabilityEmpty>, IInertialMeasurementMeasureCapability {
        public double AngleX {
            get;protected set;
        }

        public double AngleY {
            get; protected set;
        }

        public double AngleZ {
            get; protected set;
        }

        public override void SetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.InertialMeasurementMeasure;
            base.SetSetting(setting);
        }

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.InertialMeasurementMeasure;
            setting.DisplayName = setting.CapabilityType.ToString();
            return setting;
        }
    }
}
