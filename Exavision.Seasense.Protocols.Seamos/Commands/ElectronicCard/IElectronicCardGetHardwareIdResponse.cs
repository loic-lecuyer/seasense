namespace Exavision.Seasense.Protocols.Seamos.Commands.ElectronicCard {
    /// <summary>
    /// Defines the <see cref="IElectronicCardGetHardwareIdResponse" />.
    /// </summary>
    public interface IElectronicCardGetHardwareIdResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the HardwareId.
        /// </summary>
        string HardwareId { get; set; }
    }
}
