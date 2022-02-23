using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosDayCamera : Material<SettingSeamosDayCamera> {
        public override SettingSeamosDayCamera GetSetting() {
            return new SettingSeamosDayCamera();
        }

        public override void SetSetting(SettingSeamosDayCamera setting) {
            Console.WriteLine("SeamosDayCamera SetSetting");
        }
    }
}
