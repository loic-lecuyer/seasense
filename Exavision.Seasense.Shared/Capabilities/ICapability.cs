using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;

namespace Exavision.Seasense.Shared.Capabilities {
    public interface ICapability {
        public string Id { get; }
        SettingCapability GetSettingCapability();
        CapabilityState GetState();
    }
}
