
namespace Exavision.Seasense.Shared.Settings {

    public enum CapabilityType {
        UnitReboot,
        TurretMoveSpeed

    }
    public abstract class SettingCapability : SettingBase {
        public CapabilityType CapabilityType { get; set; }
    }
}
