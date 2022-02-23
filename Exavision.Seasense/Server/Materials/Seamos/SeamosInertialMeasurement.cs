using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosInertialMeasurement : InertialMeasurement<SettingSeamosInertialMeasurement> {
        public override SettingSeamosInertialMeasurement GetSetting() {
            SettingSeamosInertialMeasurement settingSeamosInertialMeasurement = base.GetSetting();
            return settingSeamosInertialMeasurement;
        }

        public override void SetSetting(SettingSeamosInertialMeasurement setting) {
            base.SetSetting(setting);
            Console.WriteLine("SettingSeamosInertialMeasurement SetSetting");
        }
    }
}
