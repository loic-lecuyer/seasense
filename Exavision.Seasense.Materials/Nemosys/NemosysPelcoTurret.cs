using Exavision.Seasense.Materials.Nemosys.Settings;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Nemosys {
    public class NemosysPelcoTurret : Turret<SettingNemosysPelcoTurret, NemosysPelcoUnit> {

        public NemosysPelcoTurret(NemosysPelcoUnit unit) : base(unit) {


        }
    }
}
