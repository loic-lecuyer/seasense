using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosThermalCamera : ThermalCamera<SettingSeamosThermalCamera, SeamosUnit> {

        public SeamosThermalCamera(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Thermal Camera";
        }
        public override SettingSeamosThermalCamera GetSetting(SettingSeamosThermalCamera setting) {
            return setting;
        }
        public override void SetSetting(SettingSeamosThermalCamera setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosThermalCamera SetSetting");
        }
    }
}
