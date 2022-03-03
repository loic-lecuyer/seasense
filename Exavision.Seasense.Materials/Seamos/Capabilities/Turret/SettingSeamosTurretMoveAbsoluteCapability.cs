using Exavision.Seasense.Shared.Settings;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.Turret {
    public class SettingSeamosTurretMoveAbsoluteCapability : SettingCapability {
        public double PanSpeed { get; set; } = 40;
        public double TiltSpeed { get; set; } = 40;
    }
}
