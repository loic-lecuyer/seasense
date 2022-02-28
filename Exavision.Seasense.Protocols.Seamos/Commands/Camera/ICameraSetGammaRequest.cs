namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraSetGammaRequest" />.
    /// </summary>
    public interface ICameraSetGammaRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Gamma.
        /// </summary>
        double Gamma { get; set; }
    }
}
