namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetZoneFocusRequest" />.
    /// </summary>
    public class SeamosCameraSetZoneFocusRequest : SeamosCameraZoneFocusRequest, ICameraSetZoneFocusRequest
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x34;
    }
}
