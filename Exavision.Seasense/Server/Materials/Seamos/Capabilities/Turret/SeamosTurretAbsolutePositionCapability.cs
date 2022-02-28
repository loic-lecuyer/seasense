using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretAbsolutePositionCapability : TurretAbsolutePositionCapability<SettingSeamosTurretAbsolutePositionCapability> {
        private readonly SeamosUnit unit;

        public SeamosTurretAbsolutePositionCapability(SeamosUnit unit) {
            this.unit = unit;
        }

        public override SettingSeamosTurretAbsolutePositionCapability GetSetting(SettingSeamosTurretAbsolutePositionCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretAbsolutePosition;
            return setting;
        }

        public override void SetSetting(SettingSeamosTurretAbsolutePositionCapability setting) {
            base.SetSetting(setting);

        }


        public override List<PollingAction> GetPollingActions() {
            List<PollingAction> actions = new List<PollingAction>();

            return actions;
        }



    }
}
