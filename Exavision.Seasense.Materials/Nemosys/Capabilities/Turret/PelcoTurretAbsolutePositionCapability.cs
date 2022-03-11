using Exavision.Seasense.Protocols.Pelco;
using Exavision.Seasense.Protocols.Pelco.Commands;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;

namespace Exavision.Seasense.Materials.Nemosys.Capabilities.Turret {
    public class PelcoTurretAbsolutePositionCapability : TurretAbsolutePositionCapability, IPelcoCapability {
        private readonly PelcoClient client;
        private readonly List<PollingAction> actions = new List<PollingAction>();
        public PelcoTurretAbsolutePositionCapability(PelcoClient client) {
            this.client = client;
            actions.Add(new PollingAction() {
                Delay = 200,
                Action = () => {
                    IPelcoGetPanRequestCommand cmdPan = this.client.Protocol.Resolve<IPelcoGetPanRequestCommand>();
                    cmdPan.ChannelByte = 0x01;
                    this.client.Send(cmdPan);
                    IPelcoGetTiltRequestCommand cmdTilt = this.client.Protocol.Resolve<IPelcoGetTiltRequestCommand>();
                    cmdTilt.ChannelByte = 0x01;
                    this.client.Send(cmdTilt);
                }

            });
        }
        public override List<PollingAction> GetPollingActions() {
            return actions;
        }
        public void ProcessHardwareResponse(IPelcoCommand command) {
            if (command is IPelcoGetPanResponseCommand panResponse) {
                this.Pan = (panResponse.GetPan() / 100) % 360;
            }
            if (command is IPelcoGetTiltResponseCommand tiltResponse) {
                double tilt = tiltResponse.GetTilt() / 100D;
                if (tilt < 180.0) tilt = -tilt;
                else tilt = 360.0 - tilt;
                this.Tilt = tilt;
            }
        }
    }
}
