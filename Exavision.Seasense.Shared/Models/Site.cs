using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Shared.Models {
    public class Site {
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public List<IUnit> Units { get; set; } = new List<IUnit>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();

        public SettingSite GetSetting() {
            SettingSite settingSite = new SettingSite();
            settingSite.Id = this.Id;
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
            foreach (IUnit unit in this.Units) {
                if (unit.GetType().BaseType.GenericTypeArguments.Length > 0) {
                    SettingMaterial settingMateiral = (from sm in settingSite.Units where unit.GetType().BaseType.GenericTypeArguments.Contains(sm.GetType()) select sm).FirstOrDefault();
                    unit.GetType().GetMethod("SetSetting", new Type[] { settingMateiral.GetType() }).Invoke(unit, new object[] { settingMateiral });
                }
            }
            foreach (ICapability capability in this.Capabilities) {
                if (capability.GetType().BaseType.GenericTypeArguments.Length > 0) {
                    SettingCapability settingCapability = (from sm in settingSite.Capabilities where capability.GetType().BaseType.GenericTypeArguments.Contains(sm.GetType()) select sm).FirstOrDefault();
                    MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                    setSettingMethod.Invoke(capability, new object[] { settingCapability });
                }
            }
        }
    }
}
