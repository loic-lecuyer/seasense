using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret;
using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosTurret : Turret<SettingSeamosTurret, SeamosUnit> {

        public SeamosTurret(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Turret";
            this.Capabilities.Add(new SeamosTurretMoveSpeedCapability(this.unit));
            this.Capabilities.Add(new SeamosTurretMoveAbsoluteCapability());
            this.Capabilities.Add(new SeamosTurretAbsolutePositionCapability(this.unit));
        }
        public override SettingSeamosTurret GetSetting(SettingSeamosTurret setting) {
            return setting;
        }

        public override void SetSetting(SettingSeamosTurret setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosTurret SetSetting");
        }
    }
}
