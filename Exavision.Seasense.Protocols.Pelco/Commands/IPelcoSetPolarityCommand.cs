namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the Polarity.
    /// </summary>
    public enum Polarity
    {
        /// <summary>
        /// Defines the WhiteHot.
        /// </summary>
        WhiteHot,

        /// <summary>
        /// Defines the BlackHot.
        /// </summary>
        BlackHot
    }

    /// <summary>
    /// Defines the <see cref="IPelcoSetPolarityCommand" />.
    /// </summary>
    public interface IPelcoSetPolarityCommand : IPelcoCommand
    {
        /// <summary>
        /// The SetPolarity.
        /// </summary>
        /// <param name="polarity">The polarity<see cref="Polarity"/>.</param>
        void SetPolarity(Polarity polarity);
    }
}
