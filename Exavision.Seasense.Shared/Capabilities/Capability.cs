using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Capabilities {
    public abstract class Capability<S> : ICapability
        where S : SettingCapability, new() {





        public string Id { get; protected set; } = Guid.NewGuid().ToString();

        public Capability() {

        }

        public SettingCapability GetSettingCapability() {
            SettingCapability settingCapability = this.GetSetting();
            settingCapability.Id = this.Id;
            return settingCapability;
        }
        public virtual void SetSetting(S setting) {
            this.Id = setting.Id;
        }
        public S GetSetting() {
            S setting = new S();
            setting.Id = this.Id;
            setting = this.GetSetting(setting);
            return setting;
        }

        public abstract S GetSetting(S setting);

        public virtual CapabilityState GetState() {
            CapabilityState state = new CapabilityState();
            state.Id = this.Id;
            return state;

        }

        public virtual List<PollingAction> GetPollingActions() {
            return new List<PollingAction>();
        }
    }
}
