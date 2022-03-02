namespace Exavision.Seasense.Streaming {
    public class RtspImageByteProvider : IImageByteProvider {
        private string streamUrl;

        public RtspImageByteProvider(string streamUrl) {
            this.streamUrl = streamUrl;
        }

        public byte[] GetImageBytes() {
            return null;
        }

        public void Start() {

        }

        public void Stop() {

        }
    }
}
