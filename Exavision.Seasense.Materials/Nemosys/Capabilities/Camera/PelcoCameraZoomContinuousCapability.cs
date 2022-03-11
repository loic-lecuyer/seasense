using Exavision.Seasense.Protocols.Pelco;
using Exavision.Seasense.Protocols.Pelco.Commands;
using Exavision.Seasense.Shared.Capabilities.Camera;

namespace Exavision.Seasense.Materials.Nemosys.Capabilities.Camera {
    public class PelcoCameraZoomContinuousCapability : CameraZoomContinuousCapability {
        private readonly PelcoClient client;
        private readonly byte channelByte;

        public PelcoCameraZoomContinuousCapability(PelcoClient client, byte channelByte) {
            this.client = client;
            this.channelByte = channelByte;
        }
        public override void ZoomInStart() {
            IPelcoCommand command = this.client.Protocol.Resolve<IPelcoZoomInCommand>();
            command.ChannelByte = this.channelByte;
            this.client.Send(command);
        }

        public override void ZoomOutStart() {
            IPelcoCommand command = this.client.Protocol.Resolve<IPelcoZoomOutCommand>();
            command.ChannelByte = this.channelByte;
            this.client.Send(command);
        }

        public override void ZoomStop() {
            IPelcoCommand command = this.client.Protocol.Resolve<IPelcoStopCommand>();
            command.ChannelByte = this.channelByte;
            this.client.Send(command);
        }
    }
}
