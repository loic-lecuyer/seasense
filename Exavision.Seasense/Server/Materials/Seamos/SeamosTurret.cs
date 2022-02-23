using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosTurret : Turret<SettingSeamosTurret> {
        public override SettingSeamosTurret GetSetting() {
            return new SettingSeamosTurret();
        }

        public override void SetSetting(SettingSeamosTurret setting) {
            Console.WriteLine("SeamosTurret SetSetting");
        }
    }
}
