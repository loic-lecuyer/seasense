namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    using Exavision.Seasense.Protocols.Seamos.Enums;
    using System.Collections;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetMeteoPresetRequest" />.
    /// </summary>
    public class SeamosCameraSetMeteoPresetRequest : SeamosPascalCommand, ICameraSetMeteoPresetRequest {
        /// <summary>
        /// Gets or sets the Weather.
        /// </summary>
        public MeteoPresetWeather Weather { get; set; }

        /// <summary>
        /// Gets or sets the Location.
        /// </summary>
        public MeteoPresetLocation Location { get; set; }

        /// <summary>
        /// Gets or sets the Time.
        /// </summary>
        public MeteoPresetTime Time { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x30;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {

            BitArray bits = new BitArray(new byte[] { data[0] });
            if (!bits[0] && !bits[1]) {
                Weather = MeteoPresetWeather.Cloud;
            }
            else if (bits[0] && !bits[1]) {
                Weather = MeteoPresetWeather.Sun;
            }
            else if (!bits[0] && bits[1]) {
                Weather = MeteoPresetWeather.Rain;
            }
            else if (bits[0] && bits[1]) {
                Weather = MeteoPresetWeather.Fog;
            }
            else {
                Weather = MeteoPresetWeather.Sun;
            }

            Time = bits[2] ? MeteoPresetTime.Night : MeteoPresetTime.Day;
            Location = bits[3] ? MeteoPresetLocation.Ground : MeteoPresetLocation.Sea;


        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            byte data = 0x00;
            if (this.Weather == MeteoPresetWeather.Cloud) {
                data = 0;
            }
            else if (this.Weather == MeteoPresetWeather.Sun) {
                data = 1;
            }
            else if (this.Weather == MeteoPresetWeather.Rain) {
                data = 2;
            }
            else if (this.Weather == MeteoPresetWeather.Fog) {
                data = 3;
            }


            if (this.Time == MeteoPresetTime.Day) {
                data += 0;
            }
            else if (this.Time == MeteoPresetTime.Night) {
                data += 4;
            }


            if (this.Location == MeteoPresetLocation.Sea) {
                data += 0;
            }
            else if (this.Location == MeteoPresetLocation.Ground) {
                data += 8;
            }
            data += 128;

            return new byte[] { CommandByte1, CommandByte2, data };
        }
    }
}
