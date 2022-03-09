using Exavision.Seasense.Materials.Seamos.Capabilities.Turret;
using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.States;

namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosTurret : Turret<SettingSeamosTurret, SeamosUnit> {

        public SeamosTurret(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Turret";
            this.Capabilities.Add(new SeamosTurretMoveSpeedCapability(this));
            this.Capabilities.Add(new SeamosTurretMoveAbsoluteCapability(this));
            this.Capabilities.Add(new SeamosTurretAbsolutePositionCapability(this));
            this.Capabilities.Add(new SeamosTurretGyrostabilizationCapability(this));
        }
        public override MaterialState GetState() {
            MaterialState state = base.GetState();
            if (this.Unit.Client.IsConnected) {
                state.Status.Add(new StatusState() { Status=Status.Ok,Message="Tcp connection ok"});
            } else {
                state.Status.Add(new StatusState() { Status = Status.Error, Message = "Tcp connection error" });
            }
           
            return state;
        }

    }
}
