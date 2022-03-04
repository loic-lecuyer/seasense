using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Protocols.Seamos.Standard.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;
namespace Exavision.Seasense.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretAbsolutePositionCapability : TurretAbsolutePositionCapability, ISeamosCapability {
        private readonly SeamosUnit unit;
        private readonly List<PollingAction> actions = new List<PollingAction>();
        public SeamosTurretAbsolutePositionCapability(SeamosUnit unit) {
            this.unit = unit;


            actions.Add(new PollingAction() {
                Delay = 100,
                Action = () => {
                    ITurretGetPositionExatrack2Absolute cmdAbsolutePosition = this.unit.Protocol.Resolve<ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);
                    cmdAbsolutePosition.CommandTarget = CommandTargetExatrack2.PTU;
                    cmdAbsolutePosition.MoveMode = MoveModeExatrack2.IgnoreData;
                    cmdAbsolutePosition.MaterialTarget = MaterialTarget.Turret;
                    //  cmdAbsolutePosition.StabilizationState = this.GetCapability<ITurretStabilization>().IsStabilizationEnabled ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
                    this.unit.Client.Send(cmdAbsolutePosition);

                }

            });

        }



        public override List<PollingAction> GetPollingActions() {

            return actions;
        }

        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is SeamosTurretAbsolutePositionExatrack2Response commandExatrack) {

                this.Pan = commandExatrack.Pan;
                this.Tilt = commandExatrack.Tilt;

            }
        }
    }
}
