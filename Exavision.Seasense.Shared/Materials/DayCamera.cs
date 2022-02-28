using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class DayCamera<S, U> : Material<S, U> where S : SettingMaterial, new() where U : IUnit, new() {

        public DayCamera(U unit) : base(unit) {

        }
        public override S GetSetting() {
            S setting = base.GetSetting();
            setting.MaterialType = MaterialType.DayCamera;
            return setting;
        }
    }
}
