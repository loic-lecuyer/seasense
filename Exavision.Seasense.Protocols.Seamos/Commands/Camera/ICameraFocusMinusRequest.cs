namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    /// <summary>
    /// Defines the <see cref="ICameraFocusMinusRequest" />.
    /// </summary>
    public interface ICameraFocusMinusRequest : ISeamosCommand
    {
        byte Speed { get; set; }
    }
}
