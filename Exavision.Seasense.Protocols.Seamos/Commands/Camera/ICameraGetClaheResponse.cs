namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public interface ICameraGetClaheResponse : ISeamosCommand
    {
        bool IsEnabled {get;set;}
    }
}
