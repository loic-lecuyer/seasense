namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoStandardGetPanResponseCommand" />.
    /// </summary>
    public class PelcoStandardGetPanResponseCommand : PelcoCommand, IPelcoGetPanResponseCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x59;

        /// <summary>
        /// The GetPan.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        public int GetPan()
        {
            return this.GetIntValue();
        }

        /// <summary>
        /// The SetPan.
        /// </summary>
        /// <param name="pan">The pan<see cref="int"/>.</param>
        public void SetPan(int pan)
        {
            this.SetIntValue(pan);
        }
    }
}
