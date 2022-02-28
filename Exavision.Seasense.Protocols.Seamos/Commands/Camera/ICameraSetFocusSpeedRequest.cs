namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetFocusSpeedRequest" />.
    /// </summary>
    public interface ICameraSetFocusSpeedRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the FocusSpeed.
        /// </summary>
        byte FocusSpeed { get; set; }
    }
}
