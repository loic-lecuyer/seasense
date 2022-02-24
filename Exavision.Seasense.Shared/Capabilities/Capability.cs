using Exavision.Seasense.Shared.Settings;
using System;

namespace Exavision.Seasense.Shared.Capabilities {
    public abstract class Capability<S> : ICapability where S : SettingCapability, new() {
        public string Id { get; protected set; } = Guid.NewGuid().ToString();
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
    }
}
