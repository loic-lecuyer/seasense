namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="PelcoCommand" />.
    /// </summary>
    public abstract class PelcoCommand : IPelcoCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public abstract byte CommandByte1 { get; set; }

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public abstract byte CommandByte2 { get; set; }

        /// <summary>
        /// Gets or sets the DataByte1.
        /// </summary>
        public byte DataByte1 { get; set; }

        /// <summary>
        /// Gets or sets the DataByte2.
        /// </summary>
        public byte DataByte2 { get; set; }

        /// <summary>
        /// Gets or sets the ChannelByte.
        /// </summary>
        public byte ChannelByte { get; set; }

        /// <summary>
        /// The GetIntValue.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        public int GetIntValue()
        {
            return ((int)this.DataByte1 << 8) + (int)this.DataByte2;
        }

        /// <summary>
        /// The SetChannel.
        /// </summary>
        /// <param name="channel">The channel<see cref="byte"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        public virtual IPelcoCommand SetChannel(byte channel)
        {
            this.ChannelByte = channel;
            return this;
        }

        /// <summary>
        /// The SetIntValue.
        /// </summary>
        /// <param name="value">The value<see cref="int"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        public IPelcoCommand SetIntValue(int value)
        {
            this.DataByte1 = (byte)(value >> 8 & 0xFF);
            this.DataByte2 = (byte)(value & 0xFF);
            return this;
        }
    }
}
