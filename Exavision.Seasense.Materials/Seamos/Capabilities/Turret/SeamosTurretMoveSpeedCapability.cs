using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Serilog;
using System;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveSpeedCapability : TurretMoveSpeedCapability<SettingSeamosTurretMoveSpeedCapability> {
        private readonly SeamosUnit unit;

        public double MaxPanSpeed { get; private set; } = 40;
        public double MaxTiltSpeed { get; private set; } = 40;

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

            ITurretSetPositionExatrack2Absolute command = this.unit.Protocol.Resolve<ITurretSetPositionExatrack2Absolute>(MaterialTarget.Turret);
            command.CommandTarget = CommandTargetExatrack2.PTU;
            command.MoveMode = MoveModeExatrack2.Speed;
            // TODO a corriger pour inslurte le flag de stab
            command.StabilizationState = StabilizationStateExatrack2.Off;
            command.SpeedUnit = SpeedUnitExatrack2.CentiDegreePerSecond;
            // Application de la courbe ²

            command.PanSpeed = (axisX * axisX) * Math.Sign(axisX) * -1;
            command.TiltSpeed = (axisY * axisY) * Math.Sign(axisY);
            // command.PanSpeed *= this.MaxPanSpeed;
            //   command.TiltSpeed *= this.MaxTiltSpeed;

            byte[] commandBytes = this.unit.Protocol.Serialize(command);
            string data = commandBytes.ToHexString();
            this.unit.Client.Send(data);
            // division par le multiplicateur de zoom
            // command.PanSpeed /= zoomMultiplier;
            //  command.TiltSpeed /= zoomMultiplier;
            Log.Information("SetSpeed Command " + command.PanSpeed + " " + command);
        }

        public override void SetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            base.SetSetting(setting);
            this.MaxPanSpeed = setting.MaxPanSpeed;
            this.MaxTiltSpeed = setting.MaxTiltSpeed;
        }
    }
}
