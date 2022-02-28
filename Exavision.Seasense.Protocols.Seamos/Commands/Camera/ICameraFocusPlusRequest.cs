namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraFocusPlusRequest" />.
    /// </summary>
    public interface ICameraFocusPlusRequest : ISeamosCommand
    {
        byte Speed { get; set; }
    }
}
