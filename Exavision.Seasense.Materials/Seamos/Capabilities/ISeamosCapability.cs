using Exavision.Seasense.Protocols.Seamos.Commands;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities {
    public interface ISeamosCapability {
        void ProcessHardwareResponse(ISeamosCommand command);
    }
}
