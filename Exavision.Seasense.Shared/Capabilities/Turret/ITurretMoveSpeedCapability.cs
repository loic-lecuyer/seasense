namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public interface ITurretMoveSpeedCapability : ICapability {
        void MoveSpeed(double axisX, double axisY);
    }
}
