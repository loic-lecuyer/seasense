using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Turret {
    public class SettingSeamosTurretMoveSpeedCapability : SettingCapability {
        public double MaxPanSpeed { get; set; } = 40;
        public double MaxTiltSpeed { get; set; } = 40;
    }
}
