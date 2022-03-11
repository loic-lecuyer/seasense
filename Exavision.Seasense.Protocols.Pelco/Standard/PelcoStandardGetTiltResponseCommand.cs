namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoStandardGetTiltResponseCommand" />.
    /// </summary>
    public class PelcoStandardGetTiltResponseCommand : PelcoCommand, IPelcoGetTiltResponseCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x5B;

        /// <summary>
        /// The GetTilt.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        public int GetTilt()
        {
            return this.GetIntValue();
        }

        /// <summary>
        /// The SetTilt.
        /// </summary>
        /// <param name="tilt">The tilt<see cref="int"/>.</param>
        public void SetTilt(int tilt)
        {
            this.SetIntValue(tilt);
        }
    }
}
