using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosDayCamera : DayCamera<SettingSeamosDayCamera, SeamosUnit> {
        public SeamosDayCamera(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Day Camera";

        }

        public override int ImageWidth { get => 1980; }
        public override int ImageHeight { get => 1080; }

        public override SettingSeamosDayCamera GetSetting(SettingSeamosDayCamera setting) {
            return setting;
        }

        public override void SetSetting(SettingSeamosDayCamera setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosDayCamera SetSetting");
        }


    }
}
