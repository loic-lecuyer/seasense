namespace Exavision.Seasense.Protocols.Seamos.Standard.Telemeter {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;
    using System;

    /// <summary>
    /// Defines the <see cref="SeamosTelemeterActionShootResponse" />.
    /// </summary>
    public class SeamosTelemeterActionShootResponse : SeamosPascalCommand, ITelemeterActionShootResponse
    {
        /// <summary>
        /// Gets or sets the DistanceMetter.
        /// </summary>
        public Double DistanceMetter { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0xB7;

        public override byte CommandByte1 => 0x00;

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
            this.DistanceMetter = (((long)data[3] << 32) + ((long)data[2] << 16) + ((long)data[1] << 8) + (long)data[0]) / 100D;
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            return new byte[] {CommandByte1, CommandByte2, (byte)((long)(this.DistanceMetter * 100D)), (byte)((long)(this.DistanceMetter * 100D) >> 8), (byte)((long)(this.DistanceMetter * 100D) >> 16), (byte)((long)(this.DistanceMetter * 100D) >> 32) };
        }
    }
}
