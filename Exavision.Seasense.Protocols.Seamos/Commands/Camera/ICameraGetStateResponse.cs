using Exavision.Seasense.Protocols.Seamos.Enums;

namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {


    /// <summary>
    /// Defines the <see cref="ICameraGetStateResponse" />.
    /// </summary>
    public interface ICameraGetStateResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the State.
        /// </summary>
        ThorState State { get; set; }
    }
}
