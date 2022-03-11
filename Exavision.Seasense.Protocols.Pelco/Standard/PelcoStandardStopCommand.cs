namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoStandardStopCommand" />.
    /// </summary>
    public class PelcoStandardStopCommand : PelcoCommand, IPelcoStopCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x00;

        /// <summary>
        /// The GetPanSpeed.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        public byte GetPanSpeed()
        {
            return 0;
        }

        /// <summary>
        /// The GetTiltSpeed.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        public byte GetTiltSpeed()
        {
            return 0;
        }

        /// <summary>
        /// The SetPanSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        public void SetPanSpeed(byte speed)
        {
            // never set speed for stop command
        }

        /// <summary>
        /// The SetTiltSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        public void SetTiltSpeed(byte speed)
        {
            // never set speed for stop command
        }
    }
}
