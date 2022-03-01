namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public interface ICameraZoomContinuousCapability : ICapability {

        public void ZoomInStart();
        public void ZoomOutStart();

        public void ZoomStop();
    }
}
