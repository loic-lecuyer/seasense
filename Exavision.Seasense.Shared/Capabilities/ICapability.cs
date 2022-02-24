using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Capabilities {
    public interface ICapability {
        public string Id { get; }
        SettingCapability GetSettingCapability();
    }
}
