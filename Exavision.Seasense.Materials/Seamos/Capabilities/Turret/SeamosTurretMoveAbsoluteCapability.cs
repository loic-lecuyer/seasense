using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveAbsoluteCapability : TurretMoveAbsoluteCapability<SettingSeamosTurretMoveAbsoluteCapability> {
        private readonly SeamosTurret turret;

        public SeamosTurretMoveAbsoluteCapability(SeamosTurret turret) {
            this.turret = turret;
        }

        public double PanSpeed { get; private set; } = 40;
        public double TiltSpeed { get; private set; } = 40;


        public override SettingSeamosTurretMoveAbsoluteCapability GetSetting(SettingSeamosTurretMoveAbsoluteCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretMoveAbsolute;
            setting.PanSpeed = this.PanSpeed;
            setting.TiltSpeed = this.TiltSpeed;
            return setting;
        }

        public override void MoveAbsolute(double pan, double tilt) {
            ITurretSetPositionExatrack2Absolute command = this.turret.Unit.Protocol.Resolve<ITurretSetPositionExatrack2Absolute>(MaterialTarget.Turret);
            command.CommandTarget = CommandTargetExatrack2.PTU;
            command.MoveMode = MoveModeExatrack2.Absolute;
            ITurretGyrostabilizationCapability stabInfo = this.turret.GetCapability<ITurretGyrostabilizationCapability>();
            command.StabilizationState = stabInfo.IsEnabled ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
            command.SpeedUnit = SpeedUnitExatrack2.CentiDegreePerSecond;
            command.Pan = pan;
            command.Tilt = tilt;
            command.PanSpeed = PanSpeed;
            command.TiltSpeed = TiltSpeed;
            this.turret.Unit.Client.Send(command);
        }

        public override void SetSetting(SettingSeamosTurretMoveAbsoluteCapability setting) {
            base.SetSetting(setting);
            this.PanSpeed = setting.PanSpeed;
            this.TiltSpeed = setting.TiltSpeed;
        }
    }
}
