namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetLuminosityRequest" />.
    /// </summary>
    public interface ICameraSetLuminosityRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Lunimosity.
        /// </summary>
        double Lunimosity { get; set; }
    }
}
