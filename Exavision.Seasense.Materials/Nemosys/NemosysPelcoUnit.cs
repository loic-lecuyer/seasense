using Exavision.Seasense.Materials.Nemosys.Settings;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Nemosys {
    public class NemosysPelcoUnit : Unit<SettingNemosysPelcoUnit> {

        public string HardwareCardIp { get; private set; }
        public string HardwareCardPort { get; private set; }

        public NemosysPelcoUnit() {
            this.Materials.Add(new NemosysPelcoTurret(this));
        }
        public override SettingNemosysPelcoUnit GetSetting(SettingNemosysPelcoUnit setting) {
            setting.HardwareCardIp = this.HardwareCardIp;
            setting.HardwareCardPort = this.HardwareCardPort;
            return setting;
        }

        public override void SetSetting(SettingNemosysPelcoUnit setting) {
            this.HardwareCardPort = setting.HardwareCardPort;
            this.HardwareCardIp = setting.HardwareCardIp;
            base.SetSetting(setting);
        }
    }
}
