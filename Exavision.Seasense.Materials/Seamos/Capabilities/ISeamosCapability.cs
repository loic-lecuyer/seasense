using Exavision.Seasense.Protocols.Seamos.Commands;

namespace Exavision.Seasense.Materials.Seamos.Capabilities {
    public interface ISeamosCapability {
        void ProcessHardwareResponse(ISeamosCommand command);
    }
}
