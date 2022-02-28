using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class InertialMeasurement<S, U> : Material<S, U> where S : SettingMaterial, new() where U : IUnit, new() {
        public InertialMeasurement(U unit) : base(unit) {

        }
        public override S GetSetting() {
            S setting = base.GetSetting();
            setting.MaterialType = MaterialType.InertialMeasurement;
            return setting;
        }
    }
}
