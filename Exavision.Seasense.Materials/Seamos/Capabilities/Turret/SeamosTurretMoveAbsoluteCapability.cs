using Exavision.Seasense.Shared.Capabilities.Turret;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveAbsoluteCapability : TurretMoveAbsoluteCapability<SettingSeamosTurretMoveAbsoluteCapability> {


        public double PanSpeed { get; private set; } = 40;
        public double TiltSpeed { get; private set; } = 40;


        public override SettingSeamosTurretMoveAbsoluteCapability GetSetting(SettingSeamosTurretMoveAbsoluteCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretMoveAbsolute;
            setting.PanSpeed = this.PanSpeed;
            setting.TiltSpeed = this.TiltSpeed;
            return setting;
        }

        public override void SetSetting(SettingSeamosTurretMoveAbsoluteCapability setting) {
            base.SetSetting(setting);
            this.PanSpeed = setting.PanSpeed;
            this.TiltSpeed = setting.TiltSpeed;
        }
    }
}
