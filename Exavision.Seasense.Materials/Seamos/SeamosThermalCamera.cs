using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor;
using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using System;
using System.Collections.Generic;
namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosThermalCamera : ThermalCamera<SettingSeamosThermalCamera, SeamosUnit> {

        public override int ImageWidth { get => 800; }
        public override int ImageHeight { get => 600; }

        private string streamUrl;
        public override string StreamUrl { get => streamUrl; }

        public SeamosThermalCamera(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Thermal Camera";
            this.Capabilities.Add(new SeamosCameraThorZoomAbsolutePositionCapability(this));
            this.Capabilities.Add(new SeamosCameraThorZoomContinuousCapability(this));
            this.Capabilities.Add(new SeamosCameraThorAutoFocusOnePushCapability(this));
        }
        public override SettingSeamosThermalCamera GetSetting(SettingSeamosThermalCamera setting) {
            setting.StreamUrl = this.streamUrl;
            setting.StreamWidth = this.ImageWidth;
            setting.StreamHeight = this.ImageHeight;
            return setting;
        }
        public override void SetSetting(SettingSeamosThermalCamera setting) {
            this.streamUrl = setting.StreamUrl;
            base.SetSetting(setting);
            Console.WriteLine("SeamosThermalCamera SetSetting");
        }


        public override List<PollingAction> GetPollingActions() {
            List<PollingAction> actions = new List<PollingAction>();

            actions.Add(new PollingAction() {
                Action = () => {
                    ICameraGetValuesRequest request = this.Unit.Protocol.Resolve<ICameraGetValuesRequest>(Protocols.Seamos.Commands.MaterialTarget.ThermalCamera);
                    byte[] commandBytes = this.Unit.Protocol.Serialize(request);
                    string data = commandBytes.ToHexString();
                    this.Unit.Client.Send(data);
                },
                Delay = 100

            });


            return actions;
        }
    }
}
