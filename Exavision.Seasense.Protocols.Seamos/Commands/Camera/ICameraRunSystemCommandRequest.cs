using Exavision.Seasense.Protocols.Seamos.Enums;

namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {


    /// <summary>
    /// Defines the <see cref="ICameraRunSystemCommandRequest" />.
    /// </summary>
    public interface ICameraRunSystemCommandRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the SystemCommand.
        /// </summary>
        SystemCommand SystemCommand { get; set; }
    }
}
