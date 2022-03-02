using Exavision.Seasense.Spinnaker.Shared.Models;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public interface ISeamosGigeCapability {
        void ProcessHarwareResponseValues(Values values);
    }
}
