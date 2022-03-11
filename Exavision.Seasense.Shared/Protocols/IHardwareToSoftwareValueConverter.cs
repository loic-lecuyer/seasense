namespace Exavision.Seasense.Shared.Protocols {
    public interface IHardwareToSoftwareValueConverter {
        public double ToSoftwareValue(double hardwareValue);

        public double ToHardwareValue(double softwareValue);
    }
}
