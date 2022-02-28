namespace Exavision.Seasense.Shared.Capabilities.Turret {
    public interface ITurretAbsolutePositionCapability {
        public double Pan { get; }
        public double Tilt { get; }
    }
}
