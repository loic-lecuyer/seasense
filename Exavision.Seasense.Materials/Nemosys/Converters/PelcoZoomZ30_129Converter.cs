using Exavision.Seasense.Shared.Protocols;
using Serilog;
using System;

namespace Exavision.Seasense.Materials.Nemosys.Converters {
    public class PelcoZoomZ30_129Converter : IHardwareToSoftwareValueConverter {
        public double ToHardwareValue(double softwareValue) {
            if (softwareValue <= 7.5)
                return (int)(128889.7272556 * Math.Pow(softwareValue, -1.22));
            else
                return (int)(5.86016 * softwareValue * softwareValue - 589.27982 * softwareValue + 14505.6);
        }

        public double ToSoftwareValue(double hardwareValue) {
            double result = 0;
            if (hardwareValue < 10708)
                result = 52.1773911 * Math.Exp(-0.0001859 * hardwareValue);
            else
                result = 0.000000002002102 * hardwareValue * hardwareValue - 0.000255830050056 * hardwareValue + 9.809045720013210;

            Log.Information("Conversion zoom " + hardwareValue + " => " + result + " °");
            return result;
        }


    }
}
