using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Enums;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using System.Linq;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Thor {
    public class SeamosCameraThorMeteoWeatherModeCapability : SwitchValueCapability, ISeamosCapability {
        private SeamosThermalCamera camera;

        public SeamosCameraThorMeteoWeatherModeCapability(SeamosThermalCamera camera) {
            this.camera = camera;

            this.Values = SwitchValue.FromEnum<MeteoPresetWeather>();

        }

        public override SwitchValueType SwitchValueType {
            get {
                return SwitchValueType.MeteoWeather;
            }


        }

        private bool ignoreHardwareResponse = false;


        public override void SetValue(SwitchValue value) {

            ignoreHardwareResponse = true;
            ICameraSetMeteoPresetRequest request = this.camera.Unit.Protocol.Resolve<ICameraSetMeteoPresetRequest>(MaterialTarget.ThermalCamera);
            SwitchValueCapability capabilityMeteoTime = (from c in this.camera.Capabilities where c is SwitchValueCapability && (c as SwitchValueCapability).SwitchValueType == SwitchValueType.MeteoTime select c as SwitchValueCapability).FirstOrDefault();
            SwitchValueCapability capabilityMeteoWeather = (from c in this.camera.Capabilities where c is SwitchValueCapability && (c as SwitchValueCapability).SwitchValueType == SwitchValueType.MeteoWeather select c as SwitchValueCapability).FirstOrDefault();
            SwitchValueCapability capabilityMeteoLocation = (from c in this.camera.Capabilities where c is SwitchValueCapability && (c as SwitchValueCapability).SwitchValueType == SwitchValueType.MeteoLocation select c as SwitchValueCapability).FirstOrDefault();
            MeteoPresetLocation loc = capabilityMeteoLocation.Value.Value.ToEnum<MeteoPresetLocation>();
            MeteoPresetTime time = capabilityMeteoTime.Value.Value.ToEnum<MeteoPresetTime>();
            MeteoPresetWeather weather = value.Value.ToEnum<MeteoPresetWeather>();
            request.Weather = weather;
            request.Time = time;
            request.Location = loc;
            this.camera.Unit.Client.Send(request);
            ignoreHardwareResponse = false;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (this.ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                this.Value = this.Values.FindSwitchValue<MeteoPresetWeather>(response.MeteoPresetWeather);
            }
        }
    }
}
