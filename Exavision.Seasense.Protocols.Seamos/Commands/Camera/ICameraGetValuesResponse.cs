namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    using Exavision.Seamos.Materials.Infrastructure.Enums;
    using System.Collections.Generic;

    /// <summary>
    /// Defines the <see cref="ICameraGetValuesResponse" />.
    /// </summary>
    public interface ICameraGetValuesResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the ShutterInfo.
        /// </summary>
        ShutterInfo ShutterInfo { get; set; }

        /// <summary>
        /// Gets or sets the MeteoPresetWeather.
        /// </summary>
        MeteoPresetWeather MeteoPresetWeather { get; set; }

        /// <summary>
        /// Gets or sets the MeteoPresetLocation.
        /// </summary>
        MeteoPresetLocation MeteoPresetLocation { get; set; }

        /// <summary>
        /// Gets or sets the MeteoPresetTime.
        /// </summary>
        MeteoPresetTime MeteoPresetTime { get; set; }

        /// <summary>
        /// Gets or sets the Brightness.
        /// </summary>
        byte Brightness { get; set; }

        /// <summary>
        /// Gets or sets the Contrast.
        /// </summary>
        byte Contrast { get; set; }

        /// <summary>
        /// Gets or sets the ColorRepresentation.
        /// </summary>
        byte ColorRepresentation { get; set; }

        /// <summary>
        /// Gets or sets the Gamma.
        /// </summary>
        int Gamma { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether GammaCorrection.
        /// </summary>
        bool GammaCorrection { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether Historgram.
        /// </summary>
        bool Historgram { get; set; }

        /// <summary>
        /// Gets or sets the ImageQuality.
        /// </summary>
        byte ImageQuality { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether Polarity.
        /// </summary>
        bool Polarity { get; set; }

        /// <summary>
        /// Gets or sets the ResetStates.
        /// </summary>
        List<ThorResetState> ResetStates { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether Reticule.
        /// </summary>
        bool Reticule { get; set; }

        /// <summary>
        /// Gets or sets the ReticuleMode.
        /// </summary>
        ReticuleMode ReticuleMode { get; set; }

        /// <summary>
        /// Gets or sets the ReticuleX.
        /// </summary>
        int ReticuleX { get; set; }

        /// <summary>
        /// Gets or sets the ReticuleY.
        /// </summary>
        int ReticuleY { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether RoiHistoEnable.
        /// </summary>
        bool RoiHistoEnable { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoHeight.
        /// </summary>
        int RoiHistoHeight { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoWidth.
        /// </summary>
        int RoiHistoWidth { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoX.
        /// </summary>
        int RoiHistoX { get; set; }

        /// <summary>
        /// Gets or sets the RoiHistoY.
        /// </summary>
        int RoiHistoY { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether RoiZoomEnable.
        /// </summary>
        bool RoiZoomEnable { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomHeight.
        /// </summary>
        int RoiZoomHeight { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomWidth.
        /// </summary>
        int RoiZoomWidth { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomX.
        /// </summary>
        int RoiZoomX { get; set; }

        /// <summary>
        /// Gets or sets the RoiZoomY.
        /// </summary>
        int RoiZoomY { get; set; }

        /// <summary>
        /// Gets or sets the Fps.
        /// </summary>
        double Fps { get; set; }

        /// <summary>
        /// Gets or sets the State.
        /// </summary>
        ThorState State { get; set; }
    }
}
