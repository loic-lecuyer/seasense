﻿using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class ThermalCamera<S, U> : Material<S, U> where S : SettingMaterial, new() where U : IUnit, new() {
        public ThermalCamera(U unit) : base(unit) {

        }

        public override S GetSetting() {
            S setting = base.GetSetting();
            setting.MaterialType = MaterialType.ThermalCamera;
            return setting;
        }
    }
}
