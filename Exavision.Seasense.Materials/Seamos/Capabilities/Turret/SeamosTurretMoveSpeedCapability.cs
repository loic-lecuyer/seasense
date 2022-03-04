using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Materials;
using System;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveSpeedCapability : TurretMoveSpeedCapability<SettingSeamosTurretMoveSpeedCapability> {
        private readonly SeamosUnit unit;

        public double MaxPanSpeed { get; private set; } = 40;
        public double MaxTiltSpeed { get; private set; } = 40;

        private double currentPanSpeed;
        private double currentTiltSpeed;
        public override double CurrentPanSpeed => currentPanSpeed;

        public override double CurrentTiltSpeed => currentTiltSpeed;

        public SeamosTurretMoveSpeedCapability(SeamosUnit unit) {
            this.unit = unit;
        }


        public override SettingSeamosTurretMoveSpeedCapability GetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretMoveSpeed;
            setting.MaxPanSpeed = this.MaxPanSpeed;
            setting.MaxTiltSpeed = this.MaxTiltSpeed;
            return setting;
        }
        /// <summary>
        /// TODO : Gestion du flag de stan , gestion asservissement au zoom
        /// </summary>
        /// <param name="axisX"></param>
        /// <param name="axisY"></param>
        public override void MoveSpeed(double axisX, double axisY) {
            StabilizationStateExatrack2 stabState = StabilizationStateExatrack2.Off;
            IMaterial turret = this.unit.GetMaterial<ITurret>();
            if (turret != null) {
                ITurretGyrostabilizationCapability gyroCap = turret.GetCapability<ITurretGyrostabilizationCapability>();
                if (gyroCap.IsEnabled) {
                    stabState = StabilizationStateExatrack2.On;
                }
                else {
                    stabState = StabilizationStateExatrack2.Off;
                }

            }
            ITurretSetPositionExatrack2Absolute command = this.unit.Protocol.Resolve<ITurretSetPositionExatrack2Absolute>(MaterialTarget.Turret);
            command.CommandTarget = CommandTargetExatrack2.PTU;
            command.MoveMode = MoveModeExatrack2.Speed;
            // TODO a corriger pour inslurte le flag de stab
            command.StabilizationState = stabState;
            command.SpeedUnit = SpeedUnitExatrack2.CentiDegreePerSecond;
            // Application de la courbe ²

            command.PanSpeed = (axisX * axisX) * Math.Sign(axisX) * -1;
            command.TiltSpeed = (axisY * axisY) * Math.Sign(axisY);
            this.currentPanSpeed = command.PanSpeed;
            this.currentTiltSpeed = command.TiltSpeed;
            // command.PanSpeed *= this.MaxPanSpeed;
            //   command.TiltSpeed *= this.MaxTiltSpeed;
            this.unit.Client.Send(command);


        }

        public override void SetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            base.SetSetting(setting);
            this.MaxPanSpeed = setting.MaxPanSpeed;
            this.MaxTiltSpeed = setting.MaxTiltSpeed;
        }
    }
}
