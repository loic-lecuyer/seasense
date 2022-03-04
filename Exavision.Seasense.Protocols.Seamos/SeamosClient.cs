using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Protocols.Seamos.Commands;
using System;
using System.Net;

namespace Exavision.Seasense.Protocols.Seamos {
    public class SeamosClient {
        private readonly string ipStr;
        private readonly string portStr;
        private readonly SeamosProtocol protocol;
        private TcpCoreStringClient client;
        public event EventHandler<ISeamosCommand> OnCommandReceive;

        public SeamosClient(string ip, string port, SeamosProtocol protocol) {
            this.ipStr = ip;
            this.portStr = port;
            this.protocol = protocol;
        }

        public void Start() {
            if (IPAddress.TryParse(this.ipStr, out IPAddress address) && int.TryParse(this.portStr, out int port)) {
                this.client = new TcpCoreStringClient();
                this.client.OnMessageReceived += this.Client_OnMessageReceived;
                this.client.Start(new IPEndPoint(address, port), "\r\n");
            }
        }

        public void Stop() {
            if (this.client != null) {
                this.client.OnMessageReceived -= this.Client_OnMessageReceived;
                this.client.Stop();
            }
        }
        public void Send(ISeamosCommand command) {
            if (this.client != null && this.client.Connected) {
                byte[] data = this.protocol.Serialize(command);
                string text = data.ToHexString();
                this.client.Send(text);
            }
        }
        private void Client_OnMessageReceived(object sender, string e) {
            byte[] data = e.HexStringToBytesArray();
            ISeamosCommand command = this.protocol.Deserialize(data);
            if (command != null) this.OnCommandReceive?.Invoke(this, command);

        }
    }
}
