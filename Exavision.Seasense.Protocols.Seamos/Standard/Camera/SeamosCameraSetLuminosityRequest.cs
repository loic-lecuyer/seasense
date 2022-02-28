namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetLuminosityRequest" />.
    /// </summary>
    public class SeamosCameraSetLuminosityRequest : SeamosPascalCommand, ICameraSetLuminosityRequest
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x08;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the Lunimosity.
        /// </summary>
        public double Lunimosity { get; set; }

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data)
        {
            this.Lunimosity = data[0];
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            return new byte[] { CommandByte1, CommandByte2, (byte)Lunimosity };
        }
    }
}
