using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public abstract class CameraAutoFocusOnePushCapabilityy<S> : Capability<S>, ICameraAutoFocusOnePushCapability where S : SettingCapability, new() {
        public abstract void FocusOnePush();

    }
}
