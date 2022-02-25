using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosDayCamera : DayCamera<SettingSeamosDayCamera> {
        public SeamosDayCamera() {
            this.DisplayName = "Seamos Day Camera";
        }
        public override SettingSeamosDayCamera GetSetting(SettingSeamosDayCamera setting) {
            return setting;
        }

        public override void SetSetting(SettingSeamosDayCamera setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosDayCamera SetSetting");
        }


    }
}
