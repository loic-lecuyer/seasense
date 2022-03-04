using Exavision.Seasense.Materials.Seamos.Capabilities.Turret;
using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosTurret : Turret<SettingSeamosTurret, SeamosUnit> {

        public SeamosTurret(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Turret";
            this.Capabilities.Add(new SeamosTurretMoveSpeedCapability(this.Unit));
            this.Capabilities.Add(new SeamosTurretMoveAbsoluteCapability());
            this.Capabilities.Add(new SeamosTurretAbsolutePositionCapability(this.Unit));
            this.Capabilities.Add(new SeamosTurretGyrostabilizationCapability(this.Unit));
        }
        public override SettingSeamosTurret GetSetting(SettingSeamosTurret setting) {
            return setting;
        }

        public override void SetSetting(SettingSeamosTurret setting) {
            base.SetSetting(setting);

        }
    }
}
