using Exavision.Seasense.Shared.Capabilities.Unit;
using System;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Unit {
    public class SeamosUnitRebootCapability : UnitRebootCapability<SettingSeamosUnitRebootCapability> {




        public override SettingSeamosUnitRebootCapability GetSetting(SettingSeamosUnitRebootCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.UnitReboot;
            return setting;
        }

        public override void Reboot() {

        }

        public override void SetSetting(SettingSeamosUnitRebootCapability setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosUnitRebootCapability SetSetting");
        }
    }
}
