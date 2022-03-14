namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraFocusPlusContinuousRequest" />.
    /// </summary>
    public class SeamosCameraFocusPlusContinuousRequest : SeamosPelcoCommand, ICameraFocusPlusContinuousRequest {
        /// <summary>
        /// Gets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get => 0x10; }

        /// <summary>
        /// Gets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get => 0x00; }
    }
}
