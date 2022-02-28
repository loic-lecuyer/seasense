using Exavision.Seasense.Shared.Capabilities.Turret;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretMoveSpeedCapability : TurretMoveSpeedCapability<SettingSeamosTurretMoveSpeedCapability> {


        public double MaxPanSpeed { get; private set; } = 40;
        public double MaxTiltSpeed { get; private set; } = 40;


        public override SettingSeamosTurretMoveSpeedCapability GetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretMoveSpeed;
            setting.MaxPanSpeed = this.MaxPanSpeed;
            setting.MaxTiltSpeed = this.MaxTiltSpeed;
            return setting;
        }

        public override void SetSetting(SettingSeamosTurretMoveSpeedCapability setting) {
            base.SetSetting(setting);
            this.MaxPanSpeed = setting.MaxPanSpeed;
            this.MaxTiltSpeed = setting.MaxTiltSpeed;
        }
    }
}
