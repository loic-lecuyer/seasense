using Exavision.Seasense.Protocols.Seamos.Enums;

namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {


    /// <summary>
    /// Defines the <see cref="ICameraSetMeteoPresetRequest" />.
    /// </summary>
    public interface ICameraSetMeteoPresetRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Weather.
        /// </summary>
        MeteoPresetWeather Weather { get; set; }

        /// <summary>
        /// Gets or sets the Location.
        /// </summary>
        MeteoPresetLocation Location { get; set; }

        /// <summary>
        /// Gets or sets the Time.
        /// </summary>
        MeteoPresetTime Time { get; set; }
    }
}
