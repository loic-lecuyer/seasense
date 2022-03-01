using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Models;
using ReactiveUI;
using System.Net;
using System.Threading.Tasks;

namespace Exavision.Seasense.Mock.Seamos.ViewModels {
    public class MainWindowViewModel : ViewModelBase {
        public string Greeting => "Seamos Mock";

        public double Pan { get => this.pan; set => this.RaiseAndSetIfChanged(ref pan, value); }

        public double Tilt { get => this.tilt; set => this.RaiseAndSetIfChanged(ref tilt, value); }

        private double pan;
        private double tilt;
        private string ip = "127.0.0.1";
        private int port = 5000;
        private TcpCoreStringServer server;
        private SeamosStandardProtocol protocol;
        private double panSpeed = 0;
        private double tilSpeed = 0;
        private double degreePerSecond = 15;
        private IntRect thermalRoiZoom = null;
        public MainWindowViewModel() {

            server = new TcpCoreStringServer();
            protocol = new SeamosStandardProtocol();
            IPEndPoint endpoint = new IPEndPoint(IPAddress.Parse(ip), port);
            server.OnMessageReceived += this.Server_OnMessageReceived;
            server.Start(endpoint, "\r\n");
            Task.Factory.StartNew(Loop);

        }

        private async Task Loop() {
            while (true) {
                this.Pan += (this.panSpeed * this.degreePerSecond / 10);
                this.Pan = this.Pan % 360;
                this.Tilt += (this.tilSpeed * this.degreePerSecond / 10);
                await Task.Delay(100);
            }
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
                else if (extatrackRequestPosition.PanTiltZoomMode == PtModeExatrack2.Speed) {

                    this.panSpeed = extatrackRequestPosition.PanSpeed;
                    this.tilSpeed = extatrackRequestPosition.TiltSpeed;
                    System.Diagnostics.Debug.WriteLine("Receive speed command " + extatrackRequestPosition.PanSpeed + " " + extatrackRequestPosition.TiltSpeed);
                }
            }
            else if (command == null) {
                System.Diagnostics.Debug.WriteLine("Receive null  command ");
            }
            else if (command is ICameraGetValuesRequest cameraGetValuesRequest) {
                ICameraGetValuesResponse res = this.protocol.Resolve<ICameraGetValuesResponse>(MaterialTarget.ThermalCamera);
                res.SystemTarget = SystemTarget.Computer;
                if (thermalRoiZoom == null) {
                    res.RoiZoomEnable = false;
                }
                else {
                    res.RoiZoomEnable = true;
                    res.RoiZoomX = this.thermalRoiZoom.X;
                    res.RoiZoomY = this.thermalRoiZoom.Y;
                    res.RoiZoomWidth = this.thermalRoiZoom.Width;
                    res.RoiZoomHeight = this.thermalRoiZoom.Height;
                }
                this.SendCommand(res, e.Item1);

            }
            else throw new System.Exception("No implementation for command " + command.GetType().Name);


        }

        private void SendCommand(ISeamosCommand command, TcpCoreStringClient client) {
            byte[] data = this.protocol.Serialize(command);
            string text = data.ToHexString();
            client.Send(text);

        }
    }
}
