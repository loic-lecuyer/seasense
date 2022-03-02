namespace Exavision.Seasense.Shared.Capabilities.Camera {
    public interface ICameraFocusContinuousCapability : ICapability {

        public void FocusInStart();
        public void FocusOutStart();

        public void FocusStop();
    }
}
