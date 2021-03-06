using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Protocols.Seamos.Commands;
using System;
using System.Collections.Generic;
using System.Net;

namespace Exavision.Seasense.Protocols.Seamos {
    public class SeamosClient {
        private string ipStr;
        private string portStr;
        private readonly SeamosProtocol protocol;
        private TcpCoreStringClient client;
        public bool IsConnected { 
            get {
                if (client != null && client.Connected) return true;
                return false;
            } 
        }

        public SeamosProtocol Protocol {
            get {
                return this.protocol;
            }
        }

        public List<string> GetLatestComMessage() {
            if (this.client != null) return this.client.GetLatestMessages();
            else return new List<string>();
        }

        public event EventHandler<ISeamosCommand> OnCommandReceive;

        public SeamosClient(SeamosProtocol protocol) {

            this.protocol = protocol;
        }

        public void Start(string ipStr, string portStr) {
            this.ipStr = ipStr;
            this.portStr = portStr;
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
                byte[] data = this.Protocol.Serialize(command);
                string text = data.ToHexString();
                this.client.Send(text);
            }
        }
        private void Client_OnMessageReceived(object sender, string e) {
            byte[] data = e.HexStringToBytesArray();
            ISeamosCommand command = this.Protocol.Deserialize(data);
            if (command != null) this.OnCommandReceive?.Invoke(this, command);

        }
    }
}
