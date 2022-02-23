using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosLazerMeasurement : LazerMeasurement<SettingSeamosLazerMeasurement> {
        public override SettingSeamosLazerMeasurement GetSetting() {
            return new SettingSeamosLazerMeasurement();
        }

        public override void SetSetting(SettingSeamosLazerMeasurement setting) {
            Console.WriteLine("SeamosLazerMeasurement SetSetting");
        }
    }
}
