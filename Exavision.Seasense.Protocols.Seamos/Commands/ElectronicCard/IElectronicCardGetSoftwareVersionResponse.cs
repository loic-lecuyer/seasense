namespace Exavision.Seasense.Protocols.Seamos.Commands.ElectronicCard {
    /// <summary>
    /// Defines the <see cref="IElectronicCardGetSoftwareVersionResponse" />.
    /// </summary>
    public interface IElectronicCardGetSoftwareVersionResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the SoftwareVersion.
        /// </summary>
        string SoftwareVersion { get; set; }
    }
}
