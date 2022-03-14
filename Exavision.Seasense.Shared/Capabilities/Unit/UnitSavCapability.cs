using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.Unit {
    public abstract class UnitSavCapability : Capability<SettingCapabilityEmpty>, IUnitSavCapability {
        public abstract bool ExecuteCommand(string commandHexString);
        public abstract void SetPollingState(bool isPollingEnabled);
        public abstract List<string> GetLatestComMessage();
        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            setting.CapabilityType = CapabilityType.UnitSav;
            return setting;
        }

 
    }
}
