using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosThermalCamera : Material<SettingSeamosThermalCamera> {
        public override SettingSeamosThermalCamera GetSetting() {
            return new SettingSeamosThermalCamera();
        }

        public override void SetSetting(SettingSeamosThermalCamera setting) {
            Console.WriteLine("SeamosThermalCamera SetSetting");
        }
    }
}
