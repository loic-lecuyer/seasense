using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Protocols.Pelco.Commands;
using System;
using System.Net;

namespace Exavision.Seasense.Protocols.Pelco {
    public class PelcoClient {
        private PelcoProtocol protocol;
        private string ipStr;
        private string portStr;
        private TcpPelcoClient client;
        public event EventHandler<IPelcoCommand> OnCommandReceive;

        public bool IsConnected { get { return this.client != null && this.client.Connected; } }

        public PelcoProtocol Protocol { get => this.protocol; }

        public PelcoClient(PelcoProtocol protocol) {

            this.protocol = protocol;
        }

        public void Start(string ipStr, string portStr) {
            this.ipStr = ipStr;
            this.portStr = portStr;
            if (IPAddress.TryParse(this.ipStr, out IPAddress address) && int.TryParse(this.portStr, out int port)) {
                this.client = new TcpPelcoClient();
                this.client.OnMessageReceived += this.Client_OnMessageReceived;
                this.client.Start(new IPEndPoint(address, port));
            }
        }

        private void Client_OnMessageReceived(object sender, byte[] e) {
            IPelcoCommand command = this.Protocol.Deserialize(e);
            if (command != null) this.OnCommandReceive?.Invoke(this, command);
        }

        public void Stop() {
            if (this.client != null) {
                this.client.OnMessageReceived -= this.Client_OnMessageReceived;
                this.client.Stop();
            }
        }
        public void Send(IPelcoCommand command) {
            if (this.client != null && this.client.Connected) {
                byte[] data = this.Protocol.Serialize(command);
                this.client.Send(data);
            }
        }

    }
}
