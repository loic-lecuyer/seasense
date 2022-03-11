using Exavision.Seasense.Materials.Nemosys.Capabilities;
using Exavision.Seasense.Protocols.Pelco.Commands;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Nemosys {
    public static class PelcoUtils {
        public static void DispatchCommand(IMaterial material, IPelcoCommand command) {
            material.Capabilities.ForEach((ICapability cap) => {
                if (cap is IPelcoCapability) {
                    (cap as IPelcoCapability).ProcessHardwareResponse(command);
                }
            });

            material.Materials.ForEach((IMaterial childMaterial) => {
                DispatchCommand(childMaterial, command);
            });
        }
    }
}
