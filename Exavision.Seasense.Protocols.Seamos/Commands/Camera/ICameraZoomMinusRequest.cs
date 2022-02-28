namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraZoomMinusRequest" />.
    /// </summary>
    public interface ICameraZoomMinusRequest : ISeamosCommand
    {
        byte ZoomSpeed { get; set; }
    }
}
