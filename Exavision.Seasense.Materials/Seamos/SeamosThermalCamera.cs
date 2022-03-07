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
            this.Capabilities.Add(new SeamosCameraThorContrastCapability(this));
            this.Capabilities.Add(new SeamosCameraThorGammaCapability(this));
            this.Capabilities.Add(new SeamosCameraThorLuminosityCapability(this));
            this.Capabilities.Add(new SeamosCameraThorQualityCapability(this));
            this.Capabilities.Add(new SeamosCameraThorMeteoLocationModeCapability(this));
            this.Capabilities.Add(new SeamosCameraThorMeteoWeatherModeCapability(this));
            this.Capabilities.Add(new SeamosCameraThorMeteoTimeModeCapability(this));
            this.Capabilities.Add(new SeamosCameraThorShutterModeCapability(this));
            this.Capabilities.Add(new SeamosCameraThorReticuleModeCapability(this));
            this.Capabilities.Add(new SeamosCameraThorColorModeCapability(this));
            /*
             * 
           
        
            
  
            this.Capabilities.Add(new SeamosThermalFocus(tcpStringClient, protocol)); chaud patate  
            this.Capabilities.Add(new SeamosThermalZoneHisto(tcpStringClient, protocol));
            this.Capabilities.Add(new SeamosThermalCameraSystemCommand(tcpStringClient, protocol));
            this.Capabilities.Add(new SeamosThermalVersionInfo(tcpStringClient, protocol));
            this.Capabilities.Add(new MaterialPollingManager(this));
            this.Capabilities.Add(new CameraStitchCapability(this));
             * */
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
                    this.Unit.Client.Send(request);
                },
                Delay = 100
            });
            return actions;
        }
    }
}
