using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Unit;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosUnit : Unit<SettingSeamosUnit> {

        public SeamosUnit() {
            this.Materials.Add(new SeamosTurret());
            this.Materials.Add(new SeamosDayCamera());
            this.Materials.Add(new SeamosThermalCamera());
            this.Materials.Add(new SeamosLazerMeasurement());
            this.Materials.Add(new SeamosInertialMeasurement());
            this.Capabilities.Add(new SeamosUnitRebootCapability());

        }

        public override SettingSeamosUnit GetSetting() {
            return new SettingSeamosUnit();
        }

        public override void SetSetting(SettingSeamosUnit setting) {
            Console.WriteLine("SeamosUnit SetSetting");
        }
    }
}

