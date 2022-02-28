namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetColorModeRequest" />.
    /// </summary>
    public interface ICameraSetColorModeRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the ColorMode.
        /// </summary>
        byte ColorMode { get; set; }
    }
}
