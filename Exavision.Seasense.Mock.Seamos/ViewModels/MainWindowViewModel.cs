using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using System.Net;
namespace Exavision.Seasense.Mock.Seamos.ViewModels {
    public class MainWindowViewModel : ViewModelBase {
        public string Greeting => "Seamos Mock";
        public double Pan { get; set; } = 25;
        public double Tilt { get; set; } = 4;
        private string ip = "127.0.0.1";
        private int port = 5000;
        private TcpCoreStringServer server;
        private SeamosStandardProtocol protocol;

        public MainWindowViewModel() {

            server = new TcpCoreStringServer();
            protocol = new SeamosStandardProtocol();
            IPEndPoint endpoint = new IPEndPoint(IPAddress.Parse(ip), port);
            server.OnMessageReceived += this.Server_OnMessageReceived;
            server.Start(endpoint, "\r\n");

        }

        private void Server_OnMessageReceived(object? sender, System.Tuple<TcpCoreStringClient, string> e) {
            byte[] data = e.Item2.HexStringToBytesArray();
            ISeamosCommand command = this.protocol.Deserialize(data);
            if (command is ITurretGetPositionExatrack2Absolute extatrackRequestPosition) {
                if (extatrackRequestPosition.MoveMode == Protocols.Seamos.Commands.Turret.MoveModeExatrack2.Absolute
                    && extatrackRequestPosition.PanTiltZoomMode == PtModeExatrack2.Ignore) {
                    ITurretGetPositionExatrack2Absolute res = this.protocol.Resolve<ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);
                    res.Pan = this.Pan;
                    res.PanTiltZoomMode = PtModeExatrack2.Absolute;
                    res.Tilt = this.Tilt;
                    res.SystemTarget = SystemTarget.Computer;
                    this.SendCommand(res, e.Item1);
                }
                else if (extatrackRequestPosition.MoveMode == MoveModeExatrack2.Speed) {
                    System.Diagnostics.Debug.WriteLine("Receive command " + command.GetType());
                }
            }
            else { System.Diagnostics.Debug.WriteLine("Receive null  command "); }


        }

        private void SendCommand(ISeamosCommand command, TcpCoreStringClient client) {
            byte[] data = this.protocol.Serialize(command);
            string text = data.ToHexString();
            client.Send(text);

        }
    }
}
