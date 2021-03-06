namespace Exavision.Seasense.Protocols.Seamos.Standard.Telemeter {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;

    /// <summary>
    /// Defines the <see cref="SeamosTelemeterErrorResponse" />.
    /// </summary>
    public class SeamosTelemeterErrorResponse : SeamosPascalCommand, ITelemeterErrorResponse
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x11;
        public override byte CommandByte1 => 0x00;
        /// <summary>
        /// Gets or sets the VectronixErrorCode.
        /// </summary>
        public int VectronixErrorCode { get; set; }

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.Telemeter;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data)
        {
            this.VectronixErrorCode = ((int)data[1] << 8) + (int)data[0];
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            return new byte[] { CommandByte1, CommandByte2, (byte)(this.VectronixErrorCode), (byte)(this.VectronixErrorCode >> 8) };
        }
    }
}
