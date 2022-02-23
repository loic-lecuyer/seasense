using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public abstract class TurretMoverSpeedCapability<S> : Capability<S>, ITurretMoverSpeedCapability where S : SettingCapability {
       
    }
}
