using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Settings;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Models {
    public class Site {
        public List<IUnit> Units { get; set; } = new List<IUnit>();

        public SettingSite GetSetting() {
            return new SettingSite();
        }

        public void SetSetting(SettingSite settingSite) {

        }
    }
}
