namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoStandardPresetClearCommand" />.
    /// </summary>
    public class PelcoStandardPresetClearCommand : PelcoCommand, IPelcoPresetClearCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x05;

        /// <summary>
        /// The SetPresetIndex.
        /// </summary>
        /// <param name="presetIndex">The presetIndex<see cref="byte"/>.</param>
        public void SetPresetIndex(byte presetIndex)
        {
            this.DataByte2 = presetIndex;
        }

        /// <summary>
        /// The GetPresetIndex.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        public int GetPresetIndex()
        {
            return this.DataByte2;
        }
    }
}
