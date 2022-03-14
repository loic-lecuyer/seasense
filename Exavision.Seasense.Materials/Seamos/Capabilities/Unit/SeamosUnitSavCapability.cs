using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Shared.Capabilities.Unit;
using System;
using System.Collections.Generic;
using System.Text;
using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Unit {
    public class SeamosUnitSavCapability : UnitSavCapability {
        private readonly SeamosUnit unit;

        public SeamosUnitSavCapability(SeamosUnit unit) {
            this.unit = unit;
        }
        public override bool ExecuteCommand(string commandHexString) {
            byte[] data = commandHexString.HexStringToBytesArray();
            ISeamosCommand command =  this.unit.Client.Protocol.Deserialize(data);
            if (command != null) {
                this.unit.Client.Send(command);
                return true;
            } else {
                return false;
            }
        }

        public override List<string> GetLatestComMessage() {
            return this.unit.Client.GetLatestComMessage();
        }

        public override void SetPollingState(bool isPollingEnabled) {
            this.unit.SetPollingState(isPollingEnabled);
        }
    }
}
