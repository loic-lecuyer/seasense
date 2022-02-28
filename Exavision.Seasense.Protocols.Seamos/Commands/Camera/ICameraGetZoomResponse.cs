namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    public  interface ICameraGetZoomResponse : ISeamosCommand
    {
         int Zoom { get;}
    }
}
