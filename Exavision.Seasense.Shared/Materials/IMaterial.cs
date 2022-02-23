using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Settings;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Materials {
    public interface IMaterial {
        List<IMaterial> Materials { get; set; }
        List<ICapability> Capabilities { get; set; }

        SettingMaterial GetSettingMaterial();
    }
}
