namespace Exavision.Seasense.Protocols.Seamos.Commands.Turret {
    /// <summary>
    /// Defines the MoveMode.
    /// </summary>
    public enum MoveModeExatrack2
    {
        /// <summary>
        /// Defines the IgnoreData.
        /// </summary>
        IgnoreData,

        /// <summary>
        /// Defines the Absolute.
        /// </summary>
        Absolute,

        /// <summary>
        /// Defines the Speed.
        /// </summary>
        Speed
    }

    /// <summary>
    /// Defines the <see cref="ITurretSetPositionExatrack2Absolute" />.
    /// </summary>
    public interface ITurretSetPositionExatrack2Absolute : ISeamosCommand
    {
        RebootAction RebootAction { get; set; } 
        StabilizationStateExatrack2 StabilizationState { get; set; } 
        SpeedUnitExatrack2 SpeedUnit { get; set; }
        /// <summary>
        /// Gets or sets the PtMode.
        /// </summary>
        PtModeExatrack2 PanTiltZoomMode { get; set; }

        /// <summary>
        /// Gets or sets the CommandTarget.
        /// </summary>
        CommandTargetExatrack2 CommandTarget { get; set; }

        /// <summary>
        /// Gets or sets the MoveMode.
        /// </summary>
        MoveModeExatrack2 MoveMode { get; set; }

        /// <summary>
        /// Gets or sets the Pan.
        /// </summary>
        double Pan { get; set; }

        /// <summary>
        /// Gets or sets the Tilt.
        /// </summary>
        double Tilt { get; set; }

        /// <summary>
        /// Gets or sets the PanSpeed beetween -1 - 1.
        /// </summary>
        double PanSpeed { get; set; }

        /// <summary>
        /// Gets or sets the TiltSpeed.
        /// </summary>
        double TiltSpeed { get; set; }
    }
}
