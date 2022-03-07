using Exavision.Seasense.Protocols.Spinnaker.Models;


namespace Exavision.Seasense.Materials.Seamos.Capabilities.Camera.Gige {
    public interface ISeamosGigeCapability {
        void ProcessHarwareResponseValues(Values values);
    }
}
