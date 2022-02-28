namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetContrastRequest" />.
    /// </summary>
    public interface ICameraSetContrastRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Contrast.
        /// </summary>
        double Contrast { get; set; }
    }
}
