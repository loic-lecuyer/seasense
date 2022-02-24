
using System.Collections.Generic;


namespace Exavision.Seasense.Shared.Settings {

    public enum MaterialType {
        DayCamera,
        ThermalCamera,
        Turret,
        LazerMeasurement,
        InertialMeasurement,
        Unit

    }
    public abstract class SettingMaterial : SettingBase {
        public MaterialType MaterialType { get; set; }
        public string DisplayName { get; set; }
        public List<SettingCapability> Capabilities { get; set; } = new List<SettingCapability>();
        public List<SettingMaterial> Materials { get; set; } = new List<SettingMaterial>();
    }
}
