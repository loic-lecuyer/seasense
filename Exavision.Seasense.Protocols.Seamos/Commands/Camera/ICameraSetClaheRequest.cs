namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public interface ICameraSetClaheRequest : ISeamosCommand
    {
        bool IsEnabled { get; set; }
    }
}
