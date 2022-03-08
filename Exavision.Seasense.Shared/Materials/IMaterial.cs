using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System.Collections.Generic;

namespace Exavision.Seasense.Shared.Materials {
    public interface IMaterial {
        void Start();
        void Stop();
        public string Id { get; }
        List<IMaterial> Materials { get; }
        List<ICapability> Capabilities { get; }
  
        SettingMaterial GetSettingMaterial();

        public string DisplayName { get; }

        T GetCapability<T>() where T : ICapability;
        MaterialState GetState();

        List<PollingAction> GetPollingActions();
        ICapability GetCapabilityById(string capabilityId);
    }
}
