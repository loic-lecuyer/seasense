namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetQualityRequest" />.
    /// </summary>
    public interface ICameraSetQualityRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Quality.
        /// </summary>
        double Quality { get; set; }
    }
}
