namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public interface  ICameraSetClaheClipRequest : ISeamosCommand
    {
        short Clip { get; set; }
    }
}
