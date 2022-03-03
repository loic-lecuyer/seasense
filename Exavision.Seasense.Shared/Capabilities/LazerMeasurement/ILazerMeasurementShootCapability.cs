namespace Exavision.Seasense.Shared.Capabilities.LazerMeasurement {
    public interface ILazerMeasurementShootCapability : ICapability {
        void ShootMeasurement();
        bool IsOn { get; }
    }
}
