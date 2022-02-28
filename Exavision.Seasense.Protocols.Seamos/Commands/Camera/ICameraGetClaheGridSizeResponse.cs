namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public interface ICameraGetClaheGridSizeResponse : ISeamosCommand
    {
        byte GridSize { get; set; }
    }
}
