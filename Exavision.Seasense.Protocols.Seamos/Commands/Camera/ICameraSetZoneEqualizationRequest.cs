namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetZoneEqualizationRequest" />.
    /// </summary>
    public interface ICameraSetZoneEqualizationRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the X.
        /// </summary>
        double X { get; set; }

        /// <summary>
        /// Gets or sets the Y.
        /// </summary>
        double Y { get; set; }

        /// <summary>
        /// Gets or sets the Width.
        /// </summary>
        double Width { get; set; }

        /// <summary>
        /// Gets or sets the Height.
        /// </summary>
        double Height { get; set; }
    }
}
