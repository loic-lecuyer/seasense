namespace Exavision.Seasense.Protocols.Seamos.Commands {
    /// <summary>
    /// Defines the <see cref="SeamosCommandVisca" />.
    /// </summary>
    public abstract class SeamosCommandVisca : SeamosCommand
    {
        /// <summary>
        /// Gets the ProtocolType.
        /// </summary>
        public override ProtocolType ProtocolType => ProtocolType.Visca;
    }
}
