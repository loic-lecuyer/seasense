namespace Exavision.Seasense.Shared.Streaming {
    public interface IImageByteProvider {
        public byte[] GetImageBytes();
        public void StartProvider();
        public void StopProvider();
    }
}
