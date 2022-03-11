namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="IPelcoGetTiltResponseCommand" />.
    /// </summary>
    public interface IPelcoGetTiltResponseCommand : IPelcoCommand
    {
        /// <summary>
        /// The GetTilt.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        int GetTilt();

        /// <summary>
        /// The SetTilt.
        /// </summary>
        /// <param name="tilt">The tilt<see cref="int"/>.</param>
        void SetTilt(int tilt);
    }
}
