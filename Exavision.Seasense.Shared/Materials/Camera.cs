using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Camera<S, U> : Material<S, U>, ICamera where S : SettingCamera, new() where U : IUnit, new() {

        public abstract int ImageWidth { get; }
        public abstract int ImageHeight { get; }

        public abstract string StreamUrl { get; }

        public Camera(U unit) : base(unit) {

        }


    }
}
