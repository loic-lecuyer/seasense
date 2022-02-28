namespace Exavision.Seasense.Protocols.Seamos.Commands.Telemeter {
    using System;

    /// <summary>
    /// Defines the <see cref="ITelemeterGetVersionResponse" />.
    /// </summary>
    public interface ITelemeterGetVersionResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Message.
        /// </summary>
        String Message { get; set; }
    }
}
