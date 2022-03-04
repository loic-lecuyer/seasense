using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Shared.Models {
    public class Site {
        public string DisplayName { get; set; } = "Site";
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public List<IUnit> Units { get; set; } = new List<IUnit>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();

        public SettingSite GetSetting() {
            SettingSite settingSite = new SettingSite();
            settingSite.Id = this.Id;
            settingSite.DisplayName = DisplayName;
            settingSite.ImplementationType = this.GetType().Name;
            foreach (ICapability capability in this.Capabilities) {
                SettingCapability settingCapability = capability.GetSettingCapability();
                settingSite.Capabilities.Add(settingCapability);
            }
            foreach (IUnit unit in this.Units) {
                settingSite.Units.Add(unit.GetSettingMaterial());
            }
            return settingSite;
        }

        public void SetSetting(SettingSite settingSite) {
            this.Id = settingSite.Id;
            this.DisplayName = settingSite.DisplayName;
            foreach (IUnit unit in this.Units) {

                SettingMaterial settingMateiral = (from sm in settingSite.Units where sm.ImplementationType.Equals(unit.GetType().Name) select sm).FirstOrDefault();
                MethodInfo setsettingMethod = unit.GetType().GetMethod("SetSetting", new Type[] { settingMateiral.GetType() });
                setsettingMethod.Invoke(unit, new object[] { settingMateiral });
            }
            foreach (ICapability capability in this.Capabilities) {

                SettingCapability settingCapability = (from sm in settingSite.Capabilities where sm.ImplementationType.Equals(capability.GetType().Name) select sm).FirstOrDefault();
                MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                setSettingMethod.Invoke(capability, new object[] { settingCapability });
            }
        }

        public SiteState GetState() {
            SiteState state = new SiteState();
            this.Units.ForEach((IUnit unit) => {
                MaterialState unitState = unit.GetState();
                state.Units.Add(unitState);
            });
            this.Capabilities.ForEach((ICapability capability) => {
                CapabilityState capabilityState = capability.GetState();
                state.Capabilities.Add(capabilityState);
            });
            return state;
        }
    }
}
