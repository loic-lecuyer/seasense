using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class LazerMeasurement<S, U> : Material<S, U> where S : SettingMaterial, new() where U : IUnit, new() {
        public LazerMeasurement(U unit) : base(unit) {

        }

        public override S GetSetting() {
            S setting = base.GetSetting();
            setting.MaterialType = MaterialType.LazerMeasurement;
            return setting;
        }
    }
}
