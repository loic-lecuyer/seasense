namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Protocols.Pelco.Commands;
    using System;

    /// <summary>
    /// Defines the <see cref="PelcoStandardSetPolarityCommand" />.
    /// </summary>
    public class PelcoStandardSetPolarityCommand : PelcoCommand, IPelcoSetPolarityCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0xB7;

        /// <summary>
        /// The SetPolarity.
        /// </summary>
        /// <param name="polarity">The polarity<see cref="Polarity"/>.</param>
        public void SetPolarity(Polarity polarity)
        {
            throw new NotImplementedException();
        }
    }
}
