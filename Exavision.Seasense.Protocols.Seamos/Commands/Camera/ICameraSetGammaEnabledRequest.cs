namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetGammaEnabledRequest" />.
    /// </summary>
    public interface ICameraSetGammaEnabledRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsEnabled.
        /// </summary>
        bool IsEnabled { get; set; }
    }
}
