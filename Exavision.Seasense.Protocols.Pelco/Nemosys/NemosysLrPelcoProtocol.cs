using Exavision.Seasense.Protocols.Pelco.Commands;

namespace Exavision.Seasense.Protocols.Pelco.Nemosys {
    public  class NemosysLrPelcoProtocol : PelcoStandardProtocol
    {
        public NemosysLrPelcoProtocol() : base()
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
