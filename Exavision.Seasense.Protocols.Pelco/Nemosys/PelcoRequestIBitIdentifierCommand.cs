namespace Exavision.Seasense.Protocols.Pelco.Nemosys {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoRequestIBitIdentifierCommand" />.
    /// </summary>
    public class PelcoRequestIBitIdentifierCommand : PelcoCommand, IPelcoRequestIBitIdentifierCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x99;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0xF1;

        /// <summary>
        /// The SetChannel.
        /// </summary>
        /// <param name="channel">The channel<see cref="byte"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        public override IPelcoCommand SetChannel(byte channel)
        {
            this.ChannelByte = 0x00;
            return this;
        }
    }
}
