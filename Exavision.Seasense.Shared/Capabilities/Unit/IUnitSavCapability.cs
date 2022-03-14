using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.Unit {
    public interface IUnitSavCapability : ICapability {
        public List<string> GetLatestComMessage();
        public bool ExecuteCommand(string commandHexString);

        public void SetPollingState(bool isPollingEnabled);
    }
}
