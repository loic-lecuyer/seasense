namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetZoneEqualizationEnabledRequest" />.
    /// </summary>
    public interface ICameraSetZoneEqualizationEnabledRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsEnabled.
        /// </summary>
        bool IsEnabled { get; set; }
    }
}
