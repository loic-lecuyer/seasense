namespace Exavision.Seasense.Protocols.Pelco.Nemosys {
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="NemosysSrPelcoProtocol" />.
    /// </summary>
    public class NemosysSrPelcoProtocol : PelcoStandardProtocol
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NemosysSrPelcoProtocol"/> class.
        /// </summary>
        public NemosysSrPelcoProtocol() : base()
        {
            this.Register<PelcoAutoFocusOneShot, IPelcoAutoFocusOneShotCommand>();
            this.Register<PelcoSetAutoFocusModeCommand, IPelcoSetAutoFocusModeCommand>();

            this.Register<PelcoRequestIBitIdentifierCommand, IPelcoRequestIBitIdentifierCommand>();
            this.Register<PelcoRequestIBitVersionCommand, IPelcoRequestIBitVersionCommand>();


            this.Register<PelcoResponseIBitVersionCommand, IPelcoResponseIBitVersionCommand>();
            this.Register<PelcoResponseIBitIdentifierCommand, IPelcoResponseIBitIdentifierCommand>();
        }
    }
}
