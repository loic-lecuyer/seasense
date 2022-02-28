using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Capabilities {
    public interface ICapability {
        public string Id { get; }
        SettingCapability GetSettingCapability();
        CapabilityState GetState();

        List<PollingAction> GetPollingActions();
    }
}
