using Exavision.Seasense.Materials.Nemosys.Settings;
using Exavision.Seasense.Protocols.Pelco;
using Exavision.Seasense.Protocols.Pelco.Commands;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Nemosys {
    public class NemosysPelcoUnit : Unit<SettingNemosysPelcoUnit> {

        public string HardwareCardIp { get; private set; }
        public string HardwareCardPort { get; private set; }
        public PelcoClient Client { get => this.client; }

        private PelcoProtocol protocol;
        private PelcoClient client;
        public NemosysPelcoUnit() {
            this.DisplayName = "Nemosys Pelco Unit";
            this.protocol = new PelcoStandardProtocol();
            this.client = new PelcoClient(this.protocol);
            this.Materials.Add(new NemosysPelcoTurret(this));
            this.Materials.Add(new NemosysPelcoDayCamera(this));
            this.Materials.Add(new NemosysPelcoThermalCamera(this));
        }
        public override void Start() {
            base.Start();
            this.Client.OnCommandReceive += this.Client_OnCommandReceive;
            this.Client.Start(this.HardwareCardIp, this.HardwareCardPort);

        }

        public override void Stop() {
            base.Stop();
            this.Client.OnCommandReceive -= this.Client_OnCommandReceive;
            this.Client.Stop();
        }

        private void Client_OnCommandReceive(object sender, IPelcoCommand e) {
            PelcoUtils.DispatchCommand(this, e);
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
