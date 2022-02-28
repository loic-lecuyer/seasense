namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetFovMode1Request" />.
    /// </summary>
    public class SeamosCameraSetFovMode1Request : SeamosPelcoCommand, ICameraSetFovMode1Request
    {
        /// <summary>
        /// Gets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 => 0x4F;
    }
}
