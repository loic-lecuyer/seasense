using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Unit;
using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using System.Net;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosUnit : Unit<SettingSeamosUnit> {
        public string HardwareCardIp { get; private set; }
        public string HardwareCardPort { get; private set; }
        public SeamosUnit() {
            this.DisplayName = "Seamos Unit";
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
            this.client = new TcpCoreStringClient();
            if (IPAddress.TryParse(this.HardwareCardIp, out IPAddress address) && int.TryParse(this.HardwareCardPort, out int port)) {
                this.client.Start(new IPEndPoint(address, port), "\r\n");
            }

        }
        private TcpCoreStringClient client;
        public override void Stop() {
            this.client.Stop();
        }
    }
}

