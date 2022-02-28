namespace Exavision.Seasense.Protocols.Seamos.Commands.Turret {
    /// <summary>
    /// Defines the <see cref="ITurretGetPositionExatrack1Absolute" />.
    /// </summary>
    public interface ITurretGetPositionExatrack2Absolute : ISeamosCommand {
        SpeedUnitExatrack2 SpeedUnit { get; set; }
        RebootAction RebootAction { get; set; }
        StabilizationStateExatrack2 StabilizationState { get; set; }
        /// <summary>
        /// Gets or sets the CommandTarget.
        /// </summary>
        CommandTargetExatrack2 CommandTarget { get; set; }

        /// <summary>
        /// Gets or sets the MoveMode.
        /// </summary>
        MoveModeExatrack2 MoveMode { get; set; }

        /// <summary>
        /// Gets or sets the PtMode.
        /// </summary>
        PtModeExatrack2 PanTiltZoomMode { get; set; }

        /// <summary>
        /// Gets or sets the Pan.
        /// </summary>
        double Pan { get; set; }

        /// <summary>
        /// Gets or sets the Tilt.
        /// </summary>
        double Tilt { get; set; }

        /// <summary>
        /// Gets or sets the PanSpeed.
        /// </summary>
        double PanSpeed { get; set; }

        /// <summary>
        /// Gets or sets the TiltSpeed.
        /// </summary>
        double TiltSpeed { get; set; }
    }
}
