namespace Exavision.Seasense.Protocols.Seamos.Commands {
    /// <summary>
    /// Defines the <see cref="ISeamosCommand" />.
    /// </summary>
    public interface ISeamosCommand : ICommand
    {
     
        /// <summary>
        /// Gets or sets the ElectronocCardId.
        /// </summary>
        int ElectronocCardId { get; set; }

        /// <summary>
        /// Gets or sets the SystemTarget.
        /// </summary>
        SystemTarget SystemTarget { get; set; }

        /// <summary>
        /// Gets the ProtocolType.
        /// </summary>
        ProtocolType ProtocolType { get; }

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        MaterialTarget MaterialTarget { get; set; }
    }
}
