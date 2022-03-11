using Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige;
using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Protocols.Spinnaker;
using Exavision.Seasense.Protocols.Spinnaker.Models;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.States;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosDayCamera : DayCamera<SettingSeamosDayCamera, SeamosUnit> {

        private readonly Values spinnakerValues = new Values();
        private readonly SpinnakerClient client;
        public override int ImageWidth { get => 1200; }
        public override int ImageHeight { get => 900; }
        private string streamUrl;
        public override string StreamUrl { get => streamUrl; }
        public Values SpinnakerValues { get => this.spinnakerValues; }


        public SeamosDayCamera(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Day Camera";
            this.client = new SpinnakerClient();
            this.Capabilities.Add(new SeamosCameraGigeZoomAbsolutePositionCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeZoomContinuousCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeQualityCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeBlackLevelCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeExposureTimeModeCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeExposureTimeCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeGainModeCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeGainCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeGammaCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeWhiteBalanceCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeWhiteBalanceModeCapability(this));
        }
        public override MaterialState GetState() {
            MaterialState state = base.GetState();
            if (this.client.IsConnected) {
                state.Status.Add(new StatusState() { Status = Status.Ok, Message = "Http connection ok" });
            }
            else {
                state.Status.Add(new StatusState() { Status = Status.Error, Message = "Http connection error" });
            }

            return state;
        }

        internal async Task SendValues() {
            await this.client.SetValues(this.spinnakerValues);
        }
        public override SettingSeamosDayCamera GetSetting(SettingSeamosDayCamera setting) {
            setting.BaseUrl = this.client.BaseUrl;
            setting.StreamUrl = this.streamUrl;
            setting.StreamWidth = this.ImageWidth;
            setting.StreamHeight = this.ImageHeight;
            return setting;
        }

        public override void SetSetting(SettingSeamosDayCamera setting) {
            this.streamUrl = setting.StreamUrl;
            this.client.BaseUrl = setting.BaseUrl;
            base.SetSetting(setting);
            Console.WriteLine("SeamosDayCamera SetSetting");
        }

        public override List<PollingAction> GetPollingActions() {
            List<PollingAction> actions = new List<PollingAction>();
            actions.Add(new PollingAction() {
                Action = async () => {
                    Values values = await this.client.GetValues();
                    this.ProcessHarwareResponseValues(values);
                },
                Delay = 250
            });


            return actions;
        }

        private void ProcessHarwareResponseValues(Values values) {
            if (values == null) return;
            this.spinnakerValues.BlackLevel.Value = values.BlackLevel.Value;
            this.spinnakerValues.ExposureTime.Mode = values.ExposureTime.Mode;
            this.spinnakerValues.ExposureTime.Value = values.ExposureTime.Value;
            this.spinnakerValues.Fps = values.Fps;
            this.spinnakerValues.Gain.Mode = values.Gain.Mode;
            this.spinnakerValues.Gain.Type = values.Gain.Type;
            this.spinnakerValues.Gain.Value = values.Gain.Value;
            this.spinnakerValues.Gamma.Value = values.Gamma.Value;
            this.spinnakerValues.Quality.Value = values.Quality.Value;
            this.spinnakerValues.Type = values.Type;
            this.spinnakerValues.Version = values.Version;
            this.spinnakerValues.WhiteBalance.Mode = values.WhiteBalance.Mode;
            this.spinnakerValues.WhiteBalance.Value = values.WhiteBalance.Value;
            this.spinnakerValues.Zoom.Value = values.Zoom.Value;
            this.Capabilities.ForEach((ICapability cap) => {
                if (cap is ISeamosGigeCapability seamosGigeCapability) {
                    seamosGigeCapability.ProcessHarwareResponseValues(values);
                }
            });
        }

    }
}
