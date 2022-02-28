namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetPolarityRequest" />.
    /// </summary>
    public interface ICameraSetPolarityRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsWhiteHot.
        /// </summary>
        bool IsWhiteHot { get; set; }
    }
}
