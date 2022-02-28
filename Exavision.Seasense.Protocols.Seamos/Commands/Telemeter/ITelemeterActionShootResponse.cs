namespace Exavision.Seasense.Protocols.Seamos.Commands.Telemeter {
    using System;

    /// <summary>
    /// Defines the <see cref="ITelemeterActionShootResponse" />.
    /// </summary>
    public interface ITelemeterActionShootResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the DistanceMetter.
        /// </summary>
        Double DistanceMetter { get; set; }
    }
}
