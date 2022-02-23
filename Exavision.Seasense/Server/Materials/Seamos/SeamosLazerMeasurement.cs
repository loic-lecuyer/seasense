using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosLazerMeasurement : LazerMeasurement<SettingSeamosLazerMeasurement> {
        public override SettingSeamosLazerMeasurement GetSetting() {
            SettingSeamosLazerMeasurement settingSeamosLazerMeasurement = base.GetSetting();
            return settingSeamosLazerMeasurement;
        }

        public override void SetSetting(SettingSeamosLazerMeasurement setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosLazerMeasurement SetSetting");
        }
    }
}
