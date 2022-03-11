namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the <see cref="IPelcoPresetClearCommand" />.
    /// </summary>
    public interface IPelcoPresetClearCommand : IPelcoCommand
    {
        /// <summary>
        /// The SetPresetIndex.
        /// </summary>
        /// <param name="presetIndex">The presetIndex<see cref="byte"/>.</param>
        void SetPresetIndex(byte presetIndex);

        /// <summary>
        /// The GetPresetIndex.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        int GetPresetIndex();
    }
}
