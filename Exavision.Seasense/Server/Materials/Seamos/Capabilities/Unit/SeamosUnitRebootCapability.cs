using Exavision.Seasense.Shared.Capabilities.Unit;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Unit {
    public class SeamosUnitRebootCapability : UnitRebootCapability<SettingSeamosUnitRebootCapability> {
        public override SettingSeamosUnitRebootCapability GetSetting() {
            return new SettingSeamosUnitRebootCapability();
        }

        public override void Reboot() {

        }

        public override void SetSetting(SettingSeamosUnitRebootCapability setting) {
            Console.WriteLine("SeamosUnitRebootCapability SetSetting");
        }
    }
}
