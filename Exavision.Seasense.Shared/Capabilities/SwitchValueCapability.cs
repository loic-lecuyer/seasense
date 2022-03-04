using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Capabilities {
    public class SwitchValueCapability : Capability<SettingSwitchValueCapability> {
        public List<SwitchValue> Values { get; protected set; } = new List<SwitchValue>();

        public SwitchValue Value { get; protected set; }
        public virtual SwitchValueType SwitchValueType { get; protected set; }
        public override SettingSwitchValueCapability GetSetting(SettingSwitchValueCapability setting) {
            setting.Values = this.Values;
            setting.Id = this.Id;
            setting.CapabilityType = CapabilityType.SwitchValue;
            setting.SwitchValueType = this.SwitchValueType;
            setting.DisplayName = this.SwitchValueType.ToString();
            return setting;
        }

        public override void SetSetting(SettingSwitchValueCapability setting) {
            base.SetSetting(setting);
            this.SwitchValueType = setting.SwitchValueType;
            this.Values = setting.Values;
        }

        public override CapabilityState GetState() {
            SwitchValueState state = new SwitchValueState() { Id = this.Id, Value = this.Value };
            return state;
        }
        public virtual void SetValue(SwitchValue value) {
            this.Value = value;
        }


    }
}
