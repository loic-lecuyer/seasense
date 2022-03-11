using Exavision.Seasense.Materials.Nemosys.Capabilities.Turret;
using Exavision.Seasense.Materials.Nemosys.Settings;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.States;

namespace Exavision.Seasense.Materials.Nemosys {
    public class NemosysPelcoTurret : Turret<SettingNemosysPelcoTurret, NemosysPelcoUnit> {

        public NemosysPelcoTurret(NemosysPelcoUnit unit) : base(unit) {
            this.DisplayName = "NemosysPelcoTurret";
            this.Capabilities.Add(new PelcoTurretAbsolutePositionCapability(this.Unit.Client));
            this.Capabilities.Add(new PelcoTurretMoveSpeedCapability(this.Unit.Client));

        }
        public override MaterialState GetState() {
            MaterialState state = base.GetState();
            if (this.Unit.Client.IsConnected) {
                state.Status.Add(new StatusState() { Status = Status.Ok, Message = "Tcp connection ok" });
            }
            else {
                state.Status.Add(new StatusState() { Status = Status.Error, Message = "Tcp connection error" });
            }

            return state;
        }
    }
}
