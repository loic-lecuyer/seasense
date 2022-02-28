using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Camera<S, U> : Material<S, U> where S : SettingMaterial, new() where U : IUnit, new() {
        public Camera(U unit) : base(unit) {

        }
    }
}
