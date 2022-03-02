namespace Exavision.Seasense.Streaming {
    public interface IImageByteProvider {
        public byte[] GetImageBytes();
        public void Start();
        public void Stop();
    }
}
