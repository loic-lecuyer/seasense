using Exavision.Seasense.Materials.Seamos.Capabilities.Unit;
using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosUnit : Unit<SettingSeamosUnit> {
        public string HardwareCardIp { get; private set; }
        public string HardwareCardPort { get; private set; }
        public SeamosProtocol Protocol { get; private set; }

        public SeamosClient Client { get; private set; }
        public SeamosUnit() {
            this.DisplayName = "Seamos Unit";
            this.Protocol = new SeamosStandardProtocol();
            this.Materials.Add(new SeamosTurret(this));
            this.Materials.Add(new SeamosDayCamera(this));
            this.Materials.Add(new SeamosThermalCamera(this));
            this.Materials.Add(new SeamosLazerMeasurement(this));
            this.Materials.Add(new SeamosInertialMeasurement(this));
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
            base.Start();
            this.Client = new SeamosClient(this.HardwareCardIp, this.HardwareCardPort, this.Protocol);
            this.Client.OnCommandReceive += this.Client_OnCommandReceive;
            this.Client.Start();


        }

        private void Client_OnCommandReceive(object sender, ISeamosCommand command) {
            SeamosUtils.DispatchCommand(this, command);
        }


        public override void Stop() {
            this.Client.OnCommandReceive -= this.Client_OnCommandReceive;
            this.Client.Stop();
        }
    }
}

