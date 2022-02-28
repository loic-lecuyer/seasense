namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraGetSoftwareVersionResponse" />.
    /// </summary>
    public interface ICameraGetSoftwareVersionResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the SoftwareVersion.
        /// </summary>
        string SoftwareVersion { get; set; }
    }
}
