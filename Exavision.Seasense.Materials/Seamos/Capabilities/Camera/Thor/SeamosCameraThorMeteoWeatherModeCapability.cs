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

            // Get Other meteo cap to set glogally
            ignoreHardwareResponse = false;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (this.ignoreHardwareResponse) return;
            if (command is ICameraGetValuesResponse response) {
                this.Value = (from v in Values where v.Value.Equals(response.MeteoPresetWeather.ToString()) select v).FirstOrDefault();
            }
        }
    }
}
