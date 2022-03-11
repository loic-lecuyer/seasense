namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="IPelcoSpeedCommand" />.
    /// </summary>
    public interface IPelcoSpeedCommand : IPelcoCommand
    {
        /// <summary>
        /// The SetTiltSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        void SetTiltSpeed(byte speed);

        /// <summary>
        /// The SetPanSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        void SetPanSpeed(byte speed);

        /// <summary>
        /// The GetTiltSpeed.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        byte GetTiltSpeed();

        /// <summary>
        /// The GetPanSpeed.
        /// </summary>
        /// <returns>The <see cref="byte"/>.</returns>
        byte GetPanSpeed();
    }
}
