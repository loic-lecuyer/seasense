using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret;
using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosTurret : Turret<SettingSeamosTurret> {

        public SeamosTurret() {
            this.Capabilities.Add(new SeamosTurretMoveSpeedCapability());
        }
        public override SettingSeamosTurret GetSetting() {
            SettingSeamosTurret settingSeamosTurret = base.GetSetting();
            return settingSeamosTurret;
        }

        public override void SetSetting(SettingSeamosTurret setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosTurret SetSetting");
        }
    }
}
