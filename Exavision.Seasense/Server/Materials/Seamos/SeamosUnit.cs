using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Unit;
using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosUnit : Unit<SettingSeamosUnit> {
        public string HardwareCardIp { get; private set; }
        public string HardwareCardPort { get; private set; }
        public SeamosUnit() {
            this.DisplayName = "Seamos Unit";
            this.Materials.Add(new SeamosTurret());
            this.Materials.Add(new SeamosDayCamera());
            this.Materials.Add(new SeamosThermalCamera());
            this.Materials.Add(new SeamosLazerMeasurement());
            this.Materials.Add(new SeamosInertialMeasurement());
            this.Capabilities.Add(new SeamosUnitRebootCapability());
        }

        public override SettingSeamosUnit GetSetting(SettingSeamosUnit setting) {
            setting.HardwareCardIp = this.HardwareCardIp;
            setting.HardwareCardPort = this.HardwareCardPort;
            return setting;
        }
        public override void SetSetting(SettingSeamosUnit setting) {
            this.HardwareCardPort = setting.HardwareCardPort;
            this.HardwareCardIp = setting.HardwareCardIp;
            base.SetSetting(setting);
        }

        public override void Start() {

        }

        public override void Stop() {

        }
    }
}

