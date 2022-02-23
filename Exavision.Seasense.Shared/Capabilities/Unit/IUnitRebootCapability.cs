using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.Unit {
   public interface IUnitRebootCapability : ICapability {
        void Reboot();
    }
}
