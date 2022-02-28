
namespace Exavision.Seasense.Shared.Settings {

    public enum CapabilityType {
        UnitReboot,
        TurretMoveSpeed,
        TurretMoveAbsolute
    }
    public abstract class SettingCapability : SettingBase {

        public string DisplayName { get; set; }
        public CapabilityType CapabilityType { get => this.capabilityType; set { this.capabilityType = value; this.DisplayName = this.capabilityType.ToString(); } }

        private CapabilityType capabilityType;

        public SettingCapability() {

        }
    }
}
