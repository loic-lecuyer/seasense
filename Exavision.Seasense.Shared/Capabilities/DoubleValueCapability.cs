using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;

namespace Exavision.Seasense.Shared.Capabilities {
    public abstract class DoubleValueCapability : Capability<SettingDoubleValueCapability> {

        public double MinValue { get; protected set; }

        public double MaxValue { get; protected set; }

        public double Value { get; protected set; }

        public abstract DoubleValueType DoubleValueType { get; }

        public override SettingDoubleValueCapability GetSetting(SettingDoubleValueCapability setting) {
            setting.MaxValue = this.MaxValue;
            setting.MinValue = this.MinValue;
            setting.Id = this.Id;
            setting.CapabilityType = CapabilityType.DoubleValue;
            setting.DoubleValueType = this.DoubleValueType;
            setting.DisplayName = this.DoubleValueType.ToString();
            return setting;
        }

        public override void SetSetting(SettingDoubleValueCapability setting) {
            base.SetSetting(setting);
            this.MaxValue = setting.MaxValue;
            this.MinValue = setting.MinValue;
        }

        public override CapabilityState GetState() {
            DoubleValueState state = new DoubleValueState() { Id = this.Id, Value = this.Value };
            return state;
        }

        public virtual void SetValue(double value) {
            this.Value = value;
        }

    }

}
