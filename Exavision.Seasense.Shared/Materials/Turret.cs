﻿using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Turret<S> : Material<S> where S : SettingMaterial, new() {
    }
}
