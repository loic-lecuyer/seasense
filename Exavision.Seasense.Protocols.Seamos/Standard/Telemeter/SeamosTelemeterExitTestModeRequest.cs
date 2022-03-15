namespace Exavision.Seasense.Protocols.Seamos.Standard.Telemeter {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;

    /// <summary>
    /// Defines the <see cref="SeamosTelemeterExitTestModeRequest" />.
    /// </summary>
    public class SeamosTelemeterExitTestModeRequest : SeamosPascalCommand, ITelemeterExitTestModeRequest {
        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.Telemeter;

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x09;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {

        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            return new byte[] { CommandByte1, CommandByte2 };
        }
    }
}
