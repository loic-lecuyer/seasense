namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraGetZoneFocusRequesResponse" />.
    /// </summary>
    public class SeamosCameraGetZoneFocusRequesResponse : SeamosCameraZoneFocusRequest, ICameraGetZoneFocusRequestResponse
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x74;
    }
}
