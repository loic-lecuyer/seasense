namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetEqualizationHistoVisibilityRequest" />.
    /// </summary>
    public interface ICameraSetEqualizationHistoVisibilityRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsVisible.
        /// </summary>
        bool IsVisible { get; set; }
    }
}
