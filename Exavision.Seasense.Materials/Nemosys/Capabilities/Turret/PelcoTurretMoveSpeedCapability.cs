using Exavision.Seasense.Core.Types;
using Exavision.Seasense.Protocols.Pelco;
using Exavision.Seasense.Protocols.Pelco.Commands;
using Exavision.Seasense.Shared.Capabilities.Turret;

namespace Exavision.Seasense.Materials.Nemosys.Capabilities.Turret {
    public class PelcoTurretMoveSpeedCapability : TurretMoveSpeedCapability<SettingPelcoTurretMoveSpeedCapability> {
        private double currentPanSpeed;
        private double currentTiltSpeed;
        private readonly PelcoClient client;

        public override double CurrentPanSpeed => currentPanSpeed;

        public override double CurrentTiltSpeed => currentTiltSpeed;

        public PelcoTurretMoveSpeedCapability(PelcoClient client) {
            this.client = client;
        }

        public override void MoveSpeed(double axisX, double axisY) {
            IPelcoSpeedCommand command = this.client.Protocol.ResolveSpeedCommand(new NormalizedSigned() { Value = axisX }, new NormalizedSigned() { Value = axisY });
            command.ChannelByte = 0x01;
            this.client.Send(command);

        }
    }
}
