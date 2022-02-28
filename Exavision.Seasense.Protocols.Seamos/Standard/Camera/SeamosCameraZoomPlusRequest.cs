namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraZoomPlusRequest" />.
    /// </summary>
    public class SeamosCameraZoomPlusRequest : SeamosPelcoCommand, ICameraZoomPlusRequest
    {

        public byte ZoomSpeed { get { return this.DataByte1; } set { this.DataByte1 = value;this.DataByte2 = value; } }
        /// <summary>
        /// Gets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 => 0x20;
    }
}
