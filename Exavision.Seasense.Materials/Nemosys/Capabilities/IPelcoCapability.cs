using Exavision.Seasense.Protocols.Pelco.Commands;

namespace Exavision.Seasense.Materials.Nemosys.Capabilities {
    public interface IPelcoCapability {
        void ProcessHardwareResponse(IPelcoCommand command);
    }
}
