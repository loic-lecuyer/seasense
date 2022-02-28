namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetPolarityRequest" />.
    /// </summary>
    public class SeamosCameraSetPolarityRequest : SeamosPascalCommand, ICameraSetPolarityRequest
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsWhiteHot.
        /// </summary>
        public bool IsWhiteHot { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x1A;

        public override byte CommandByte1 => 0x00;

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
            this.IsWhiteHot = data[0] == 0x00;
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            byte polarityByte = IsWhiteHot ? (byte)0 : (byte)1;
            return new byte[] { CommandByte1, CommandByte2, polarityByte };
        }
    }
}
