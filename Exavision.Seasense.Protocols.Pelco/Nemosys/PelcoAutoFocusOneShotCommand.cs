namespace Exavision.Seasense.Protocols.Pelco.Nemosys {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoAutoFocusOneShot" />.
    /// </summary>
    public class PelcoAutoFocusOneShot : PelcoCommand, IPelcoAutoFocusOneShotCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x2b;

        /// <summary>
        /// Initializes a new instance of the <see cref="PelcoAutoFocusOneShot"/> class.
        /// </summary>
        public PelcoAutoFocusOneShot()
        {
            this.DataByte1 = 0x00;
            this.DataByte2 = 0x01;
        }
    }
}
