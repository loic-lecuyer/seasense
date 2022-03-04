using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Materials;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretGyrostabilizationCapability : TurretGyrostabilizationCapability, ISeamosCapability {
        private SeamosUnit unit;
        private bool isEnabled = false;
        public SeamosTurretGyrostabilizationCapability(SeamosUnit unit) {
            this.unit = unit;
        }

        public override bool IsEnabled => isEnabled;


        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is ITurretGetPositionExatrack2Absolute) {
                ITurretGetPositionExatrack2Absolute res = command as ITurretGetPositionExatrack2Absolute;
                switch (res.StabilizationState) {
                    case StabilizationStateExatrack2.Off:
                        if (this.isEnabled) {
                            this.isEnabled = false;
                        }

                        break;
                    case StabilizationStateExatrack2.On:
                        if (!this.isEnabled) {
                            this.isEnabled = true;
                        }

                        break;
                }
            }
        }

        public override void SetGyrostabilization(bool enabled) {
            IMaterial turret = this.unit.GetMaterial<ITurret>();
            double panSpeed = 0;
            double tiltSpeed = 0;
            if (turret != null) {
                ITurretMoveSpeedCapability moveSpeedCap = turret.GetCapability<ITurretMoveSpeedCapability>();
                if (moveSpeedCap != null) {
                    panSpeed = moveSpeedCap.CurrentPanSpeed;
                    tiltSpeed = moveSpeedCap.CurrentTiltSpeed;
                }
            }

            ITurretGetPositionExatrack2Absolute command = this.unit.Protocol.Resolve<ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);
            command.CommandTarget = CommandTargetExatrack2.PTU;
            command.MoveMode = MoveModeExatrack2.Speed;
            command.MaterialTarget = MaterialTarget.Turret;
            command.SpeedUnit = SpeedUnitExatrack2.CentiDegreePerSecond;
            command.PanSpeed = panSpeed;
            command.TiltSpeed = tiltSpeed;
            command.StabilizationState = enabled ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
            this.unit.Client.Send(command);

        }
    }
}
