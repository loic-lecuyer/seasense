using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosInertialMeasurement : InertialMeasurement<SettingSeamosInertialMeasurement> {
        public SeamosInertialMeasurement() {
            this.DisplayName = "Seamos Inertial Measurement";
        }
        public override SettingSeamosInertialMeasurement GetSetting(SettingSeamosInertialMeasurement setting) {
            return setting;
        }
        public override void SetSetting(SettingSeamosInertialMeasurement setting) {
            base.SetSetting(setting);
            Console.WriteLine("SettingSeamosInertialMeasurement SetSetting");
        }
    }
}
