namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="IPelcoSetFocusSpeedCommand" />.
    /// </summary>
    public interface IPelcoSetFocusSpeedCommand : IPelcoCommand
    {
        /// <summary>
        /// The SetFocusSpeed.
        /// </summary>
        /// <param name="speed">The speed<see cref="byte"/>.</param>
        void SetFocusSpeed(byte speed);
    }
}
