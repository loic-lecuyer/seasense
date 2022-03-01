namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public interface ICameraZoomAbsolutePositionCapability : ICapability {
        public double HorizontalFieldOfView { get; }

        public double ZoomMultiplier { get; }
    }
}
