namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public interface ICameraGetClaheClipResponse : ISeamosCommand
    {
        short Clip { get; set; }
    }
}
