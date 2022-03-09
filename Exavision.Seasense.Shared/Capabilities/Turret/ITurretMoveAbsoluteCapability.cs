namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public interface ITurretMoveAbsoluteCapability : ICapability {
        void MoveAbsolute(double pan, double tilt);
    }
}
