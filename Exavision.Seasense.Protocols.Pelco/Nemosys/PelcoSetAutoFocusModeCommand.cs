namespace Exavision.Seasense.Protocols.Pelco.Nemosys {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoSetAutoFocusModeCommand" />.
    /// </summary>
    public class PelcoSetAutoFocusModeCommand : PelcoCommand, IPelcoSetAutoFocusModeCommand
    {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x2B;

        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        public AutoFocusMode Mode
        {
            get
            {
                return (AutoFocusMode)this.DataByte2;
            }
            set
            {
                this.DataByte2 = (byte)value;
            }
        }
    }
}
