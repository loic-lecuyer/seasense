using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class DayCamera<S> : Material<S> where S : SettingMaterial, new() {
        public override S GetSetting() {
            S setting = base.GetSetting();
            setting.MaterialType = MaterialType.DayCamera;
            return setting;
        }
    }
}
