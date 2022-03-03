namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public interface ITurretGyrostabilizationCapability : ICapability {
        void SetGyrostabilization(bool enabled);

        bool IsEnabled { get; }
    }
}
