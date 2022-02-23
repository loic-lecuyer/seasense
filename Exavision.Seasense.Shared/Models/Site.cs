using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Exavision.Seasense.Shared.Models {
    public class Site {
        public List<IUnit> Units { get; set; } = new List<IUnit>();

        public SettingSite GetSetting() {
            SettingSite settingSite = new SettingSite();
            foreach (IUnit unit in this.Units) {
                settingSite.Units.Add(unit.GetSettingMaterial());
            }
            return settingSite;
        }

        public void SetSetting(SettingSite settingSite) {
            foreach (IUnit unit in this.Units) {
                if (unit.GetType().BaseType.GenericTypeArguments.Length > 0) {
                    SettingMaterial settingMateiral = (from sm in settingSite.Units where unit.GetType().BaseType.GenericTypeArguments.Contains(sm.GetType()) select sm).FirstOrDefault();
                    unit.GetType().GetMethod("SetSetting", new Type[] { settingMateiral.GetType() }).Invoke(unit, new object[] { settingMateiral });
                }
            }
        }
    }
}
