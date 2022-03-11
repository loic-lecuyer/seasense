namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoStandardUpRightCommand" />.
    /// </summary>
    public class PelcoStandardUpRightCommand : PelcoCommand, IPelcoUpRightCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x0A;

        /// <summary>
        /// The SetTiltSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        public void SetTiltSpeed(byte speed)
        {
            this.DataByte2 = speed;
        }

        /// <summary>
        /// The SetPanSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        public void SetPanSpeed(byte speed)
        {
            this.DataByte1 = speed;
        }
        /// <summary>
        /// The GetTiltSpeed.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        public byte GetTiltSpeed()
        {
            return this.DataByte2;
        }

        /// <summary>
        /// The GetPanSpeed.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        public byte GetPanSpeed()
        {
            return this.DataByte1;
        }
    }
}
