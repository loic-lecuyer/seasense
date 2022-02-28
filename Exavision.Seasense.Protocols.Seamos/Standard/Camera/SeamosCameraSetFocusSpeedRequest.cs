namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetFocusSpeedRequest" />.
    /// </summary>
    public class SeamosCameraSetFocusSpeedRequest : SeamosPelcoCommand, ICameraSetFocusSpeedRequest
    {
        /// <summary>
        /// Gets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 => 0x40;

        /// <summary>
        /// Gets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 => 0x00;

        /// <summary>
        /// Gets or sets the FocusSpeed.
        /// </summary>
        public byte FocusSpeed
        {
            get
            {
                return this.DataByte2;
            }
            set
            {
                this.DataByte1 = 0x00;
                this.DataByte2 = value;
            }
        }
    }
}
