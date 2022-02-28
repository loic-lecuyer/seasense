namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraGetHardwareIdResponse" />.
    /// </summary>
    public interface ICameraGetHardwareIdResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the HardwareId.
        /// </summary>
        string HardwareId { get; set; }
    }
}
