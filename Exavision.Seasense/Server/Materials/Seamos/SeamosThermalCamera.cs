using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosThermalCamera : Material<SettingSeamosThermalCamera> {
        public override SettingSeamosThermalCamera GetSetting() {
            SettingSeamosThermalCamera settingSeamosThermalCamera = base.GetSetting();
            return settingSeamosThermalCamera;
        }

        public override void SetSetting(SettingSeamosThermalCamera setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosThermalCamera SetSetting");
        }
    }
}
