using Exavision.Seasense.Protocols.Pelco.Commands;

namespace Exavision.Seasense.Protocols.Pelco.Standard {
    public class PelcoNucCommand : PelcoCommand, IPelcoNucCommand
    {
        public override byte CommandByte1 { get; set; } = 0x00;
        public override byte CommandByte2 { get; set; } = 0x07;

        public PelcoNucCommand() : base()
        {
            this.DataByte1 = 0x00;
            this.DataByte2 = 0x27;
        }


    }
}
