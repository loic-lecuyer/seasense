using Exavision.Seasense.Shared.Capabilities.Turret;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveSpeedCapability : TurretMoverSpeedCapability<SettingSeamosTurretMoveSpeedCapability> {
        public override SettingSeamosTurretMoveSpeedCapability GetSetting() {
            return new SettingSeamosTurretMoveSpeedCapability();
        }
        public override void SetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosTurretMoveSpeedCapability SetSetting");
        }
    }
}
