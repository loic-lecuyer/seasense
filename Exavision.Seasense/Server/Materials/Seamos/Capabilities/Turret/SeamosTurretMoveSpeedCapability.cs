using Exavision.Seasense.Shared.Capabilities.Turret;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveSpeedCapability : TurretMoverSpeedCapability<SettingSeamosTurretMoveSpeedCapability> {

        public override SettingSeamosTurretMoveSpeedCapability GetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretMoveSpeed;
            return setting;
        }

        public override void SetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosTurretMoveSpeedCapability SetSetting");
        }
    }
}
