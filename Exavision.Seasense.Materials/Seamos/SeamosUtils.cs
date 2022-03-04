using Exavision.Seasense.Materials.Seamos.Capabilities;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Seamos {
    public static class SeamosUtils {
        public static void DispatchCommand(IMaterial material, ISeamosCommand command) {
            material.Capabilities.ForEach((ICapability cap) => {
                if (cap is ISeamosCapability) {
                    (cap as ISeamosCapability).ProcessHardwareResponse(command);
                }
            });

            material.Materials.ForEach((IMaterial childMaterial) => {
                DispatchCommand(childMaterial, command);
            });
        }
    }
}
