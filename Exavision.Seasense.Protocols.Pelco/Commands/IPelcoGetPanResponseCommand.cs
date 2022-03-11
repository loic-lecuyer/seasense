namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="IPelcoGetPanResponseCommand" />.
    /// </summary>
    public interface IPelcoGetPanResponseCommand : IPelcoCommand
    {
        /// <summary>
        /// The GetPan.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        int GetPan();

        /// <summary>
        /// The SetPan.
        /// </summary>
        /// <param name="pan">The pan<see cref="int"/>.</param>
        void SetPan(int pan);
    }
}
