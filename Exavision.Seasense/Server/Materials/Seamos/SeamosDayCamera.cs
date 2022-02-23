using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosDayCamera : Material<SettingSeamosDayCamera> {
        public override SettingSeamosDayCamera GetSetting() {
            SettingSeamosDayCamera settingSeamosDayCamera = base.GetSetting();
            return settingSeamosDayCamera;
        }

        public override void SetSetting(SettingSeamosDayCamera setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosDayCamera SetSetting");
        }
    }
}
