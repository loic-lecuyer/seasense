using Exavision.Seasense.Shared.Protocols;
using System;

namespace Exavision.Seasense.Materials.Nemosys.Converters {
    public class PelcoZoomTableConverter : IHardwareToSoftwareValueConverter {
        private Tuple<int, double>[] table;
        private readonly int offset;
        private readonly int gain;

        public PelcoZoomTableConverter(Tuple<int, double>[] table, int offset = 0, int gain = 1) {
            this.table = table;
            this.offset = offset;
            this.gain = gain;
        }
        public double ToHardwareValue(double softwareValue) {
            if (softwareValue > table[0].Item2)
                return table[0].Item1;
            if (softwareValue < table[table.Length - 1].Item2)
                return table[table.Length - 1].Item1;

            int index = FovIndexOf(table, softwareValue, 0, table.Length - 1);

            double a = (table[index + 1].Item1 - table[index].Item1) /
                       (table[index + 1].Item2 - table[index].Item2);
            double b = table[index].Item1 - a * table[index].Item2;

            int pelcoValue = (int)(a * softwareValue + b);

            pelcoValue = (int)((pelcoValue - offset) * gain);

            return pelcoValue;
        }

        public double ToSoftwareValue(double hardwareValue) {
            hardwareValue = (int)((hardwareValue / gain) + offset);

            if (hardwareValue < table[0].Item1)
                return table[0].Item2;
            if (hardwareValue > table[table.Length - 1].Item1)
                return table[table.Length - 1].Item2;

            int index = PelcoIndexOf(table, (int)hardwareValue, 0, table.Length - 1);

            double a = (table[index + 1].Item2 - table[index].Item2) /
                       (table[index + 1].Item1 - table[index].Item1);

            double b = table[index].Item2 - a * table[index].Item1;

            double fovValue = a * hardwareValue + b;
            return fovValue;
        }
        private int FovIndexOf(Tuple<int, double>[] values, double fov, int min, int max) {
            if (max - min <= 1)
                return min;
            int n = (max + min) / 2;

            if (fov > values[n].Item2)
                return FovIndexOf(values, fov, min, n);

            return FovIndexOf(values, fov, n, max);
        }

        private int PelcoIndexOf(Tuple<int, double>[] values, int pelco, int min, int max) {
            if (max - min <= 1)
                return min;
            int n = (max + min) / 2;

            if (pelco > values[n].Item1)
                return PelcoIndexOf(values, pelco, n, max);

            return PelcoIndexOf(values, pelco, min, n);
        }


    }
}
