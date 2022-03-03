using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Materials.Seamos.Capabilities;
using Exavision.Seasense.Materials.Seamos.Capabilities.Unit;
using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;
using System.Net;

namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosUnit : Unit<SettingSeamosUnit> {
        public string HardwareCardIp { get; private set; }
        public string HardwareCardPort { get; private set; }
        public SeamosProtocol Protocol { get; private set; }

        public TcpCoreStringClient Client { get; private set; }
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
            this.Client = new TcpCoreStringClient();
            if (IPAddress.TryParse(this.HardwareCardIp, out IPAddress address) && int.TryParse(this.HardwareCardPort, out int port)) {
                this.Client.OnMessageReceived += this.Client_OnMessageReceived;
                this.Client.Start(new IPEndPoint(address, port), "\r\n");
            }
            base.Start();

        }

        private void Client_OnMessageReceived(object sender, string e) {

            byte[] data = e.HexStringToBytesArray();
            ISeamosCommand command = this.Protocol.Deserialize(data);
            if (command != null) {
                this.Capabilities.ForEach((ICapability cap) => {
                    if (cap is ISeamosCapability) {
                        (cap as ISeamosCapability).ProcessHardwareResponse(command);
                    }
                });

                this.Materials.ForEach((IMaterial material) => {
                    material.Capabilities.ForEach((ICapability cap) => {
                        if (cap is ISeamosCapability) {
                            (cap as ISeamosCapability).ProcessHardwareResponse(command);
                        }
                    });
                });
            }
        }

        public override void Stop() {
            this.Client.OnMessageReceived -= this.Client_OnMessageReceived;
            base.Stop();
            this.Client.Stop();
        }
    }
}

