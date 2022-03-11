namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoRpLabSharkSetFocusSpeedCommand" />.
    /// </summary>
    public class PelcoRpLabSharkSetFocusSpeedCommand : PelcoCommand, IPelcoSetFocusSpeedCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x27;

        /// <summary>
        /// The SetFocusSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        public void SetFocusSpeed(byte speed)
        {
            this.DataByte1 = 0x00;
            this.DataByte2 = speed;
        }
    }
}
