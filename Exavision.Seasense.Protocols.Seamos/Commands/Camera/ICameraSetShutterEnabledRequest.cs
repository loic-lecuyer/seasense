namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetShutterEnabledRequest" />.
    /// </summary>
    public interface ICameraSetShutterEnabledRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsEnabled.
        /// </summary>
        bool IsEnabled { get; set; }
    }
}
