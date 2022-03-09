using Exavision.Seasense.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.States;
using System;

namespace Exavision.Seasense.Materials.Seamos {
    public class SeamosInertialMeasurement : InertialMeasurement<SettingSeamosInertialMeasurement, SeamosUnit> {
        public SeamosInertialMeasurement(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Inertial Measurement";
        }
        public override MaterialState GetState() {
            MaterialState state = base.GetState();
            if (this.Unit.Client.IsConnected) {
                state.Status.Add(new StatusState() { Status = Status.Ok, Message = "Tcp connection ok" });
            } else {
                state.Status.Add(new StatusState() { Status = Status.Error, Message = "Tcp connection error" });
            }

            return state;
        }
    }
}
