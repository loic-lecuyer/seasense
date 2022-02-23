using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosInertialMeasurement : InertialMeasurement<SettingSeamosInertialMeasurement> {
        public override SettingSeamosInertialMeasurement GetSetting() {
            return new SettingSeamosInertialMeasurement();
        }

        public override void SetSetting(SettingSeamosInertialMeasurement setting) {
            Console.WriteLine("SettingSeamosInertialMeasurement SetSetting");
        }
    }
}
