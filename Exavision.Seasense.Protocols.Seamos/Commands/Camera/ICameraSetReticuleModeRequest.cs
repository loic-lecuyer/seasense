namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    using Exavision.Seamos.Materials.Infrastructure.Enums;

    /// <summary>
    /// Defines the <see cref="ICameraSetReticuleModeRequest" />.
    /// </summary>
    public interface ICameraSetReticuleModeRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        ReticuleMode Mode { get; set; }
    }
}
