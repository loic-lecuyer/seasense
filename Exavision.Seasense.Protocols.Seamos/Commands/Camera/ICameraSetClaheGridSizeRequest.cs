namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public interface ICameraSetClaheGridSizeRequest : ISeamosCommand
    {
        byte GridSize { get; set; }
    }
}
