using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Turret<S, U> : Material<S, U>, ITurret where S : SettingMaterial, new() where U : IUnit, new() {
        public Turret(U unit) : base(unit) {

        }


        public override S GetSetting() {
            S setting = base.GetSetting();
            setting.MaterialType = MaterialType.Turret;
            return setting;
        }
    }
}
