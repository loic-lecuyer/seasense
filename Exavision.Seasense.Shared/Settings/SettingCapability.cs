
namespace Exavision.Seasense.Shared.Settings {

    public enum CapabilityType {
        UnitReboot,
        UnitSav,
        TurretMoveSpeed,
        TurretMoveAbsolute,
        TurretAbsolutePosition,
        CameraZoomAbsolutePosition,
        CameraZoomContinuous,
        CameraFocusContinuous,
        TurretGyrostabilization,
        CameraAutoFocusOnePush,
        IntValue,
        DoubleValue,
        SwitchValue,
        LazerMeasurementShootCapability,
        InertialMeasurementMeasure
    }
    public abstract class SettingCapability : SettingBase {

        public string DisplayName { get; set; }
        public CapabilityType CapabilityType { get => this.capabilityType; set { this.capabilityType = value; this.DisplayName = this.capabilityType.ToString(); } }

        private CapabilityType capabilityType;




        public SettingCapability() {

        }
    }
}
