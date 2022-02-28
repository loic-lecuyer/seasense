namespace Exavision.Seasense.Protocols.Seamos.Commands.Telemeter {
    /// <summary>
    /// Defines the <see cref="ITelemeterErrorResponse" />.
    /// </summary>
    public interface ITelemeterErrorResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the VectronixErrorCode.
        /// </summary>
        int VectronixErrorCode { get; set; }
    }
}
