using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities {
    public interface ICapability {
        SettingCapability GetSettingCapability();
    }
}
