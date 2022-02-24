using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosLazerMeasurement : LazerMeasurement<SettingSeamosLazerMeasurement> {

        public SeamosLazerMeasurement() {
            this.DisplayName = "Seamos Lazer Measurement";
        }
        public override SettingSeamosLazerMeasurement GetSetting(SettingSeamosLazerMeasurement setting) {
            return setting;
        }
        public override void SetSetting(SettingSeamosLazerMeasurement setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosLazerMeasurement SetSetting");
        }
    }
}
