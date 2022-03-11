using Exavision.Seasense.Protocols.Pelco;
using Exavision.Seasense.Protocols.Pelco.Commands;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Protocols;
using System.Collections.Generic;

namespace Exavision.Seasense.Materials.Nemosys.Capabilities.Camera {
    public class PelcoCameraAbsoluteZoomPositionCapability : CameraZoomAbsolutePositionCapability<SettingPelcoCameraAbsoluteZoomPositionCapability>, IPelcoCapability {
        private readonly PelcoClient client;
        private readonly ICamera camera;
        private readonly IHardwareToSoftwareValueConverter converter;
        private readonly byte channelBye;

        public double MinHorizontalFieldOfView { get; private set; }
        public double MaxHorizontalFieldOfView { get; private set; }
        private readonly List<PollingAction> actions = new List<PollingAction>();
        public PelcoCameraAbsoluteZoomPositionCapability(PelcoClient client, ICamera camera, IHardwareToSoftwareValueConverter converter, double minHfov = 1.64, double maxHfov = 52.18, byte channelBye = 0x01) {
            this.client = client;
            this.camera = camera;
            this.converter = converter;
            this.MinHorizontalFieldOfView = minHfov;
            this.MaxHorizontalFieldOfView = maxHfov;
            this.channelBye = channelBye;
            actions.Add(new PollingAction() {
                Delay = 200,
                Action = () => {
                    IPelcoGetZoomRequestCommand cmdPan = this.client.Protocol.Resolve<IPelcoGetZoomRequestCommand>();
                    cmdPan.ChannelByte = this.channelBye;
                    this.client.Send(cmdPan);
                }

            });

        }
        private double horizontalFieldOfView = 1;
        public override double HorizontalFieldOfView {
            get {
                return this.horizontalFieldOfView;

            }

        }

        public override double ZoomMultiplier {
            get {
                if (this.horizontalFieldOfView != 0) return this.MaxHorizontalFieldOfView / this.horizontalFieldOfView;
                else return 1;
            }
        }
        public override List<PollingAction> GetPollingActions() {
            return actions;
        }
        public void ProcessHardwareResponse(IPelcoCommand command) {
            if (command is IPelcoGetZoomResponseCommand response) {
                if (response.ChannelByte == this.channelBye) {
                    this.horizontalFieldOfView = this.converter.ToSoftwareValue(response.GetIntValue());
                }

            }

        }
        public override SettingPelcoCameraAbsoluteZoomPositionCapability GetSetting(SettingPelcoCameraAbsoluteZoomPositionCapability setting) {
            base.GetSetting(setting);
            setting.MaxHorizontalFieldOfView = this.MaxHorizontalFieldOfView;
            setting.MinHorizontalFieldOfView = this.MinHorizontalFieldOfView;
            return setting;
        }

        public override void SetSetting(SettingPelcoCameraAbsoluteZoomPositionCapability setting) {
            base.SetSetting(setting);
            this.MaxHorizontalFieldOfView = setting.MaxHorizontalFieldOfView;
            this.MinHorizontalFieldOfView = setting.MinHorizontalFieldOfView;
        }
    }
}
