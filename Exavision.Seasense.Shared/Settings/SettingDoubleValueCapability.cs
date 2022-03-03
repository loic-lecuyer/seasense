using Exavision.Seasense.Shared.Capabilities;

namespace Exavision.Seasense.Shared.Settings {
    public class SettingDoubleValueCapability : SettingCapability {

        public double MinValue { get; set; }

        public double MaxValue { get; set; }

        public DoubleValueType DoubleValueType { get; set; }
    }
}
