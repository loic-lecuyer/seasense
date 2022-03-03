namespace Exavision.Seasense.Shared.Materials {
    public interface ICamera : IMaterial {
        public int ImageWidth { get; }
        public int ImageHeight { get; }
        public string StreamUrl { get; }


    }
}
