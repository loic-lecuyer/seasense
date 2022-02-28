namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraZoomPlusRequest" />.
    /// </summary>
    public interface ICameraZoomPlusRequest : ISeamosCommand
    {
        byte ZoomSpeed { get; set; }
    }
}
