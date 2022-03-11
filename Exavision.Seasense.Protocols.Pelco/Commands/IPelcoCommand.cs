namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="IPelcoCommand" />.
    /// </summary>
    public interface IPelcoCommand
    {
        /// <summary>
        /// Gets or sets the ChannelByte.
        /// </summary>
        byte ChannelByte { get; set; }

        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        byte CommandByte1 { get; set; }

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        byte CommandByte2 { get; set; }

        /// <summary>
        /// Gets the DataByte1.
        /// </summary>
        byte DataByte1 { get; }

        /// <summary>
        /// The SetChannel.
        /// </summary>
        /// <param name="channel">The channel<see cref="byte"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        IPelcoCommand SetChannel(byte channel);

        /// <summary>
        /// Gets the DataByte2.
        /// </summary>
        byte DataByte2 { get; }

        /// <summary>
        /// The GetIntValue.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        int GetIntValue();

        /// <summary>
        /// The SetIntValue.
        /// </summary>
        /// <param name="value">The value<see cref="int"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        IPelcoCommand SetIntValue(int value);
    }
}
