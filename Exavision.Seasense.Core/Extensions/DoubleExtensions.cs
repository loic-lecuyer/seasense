namespace Exavision.Seasense.Core.Extensions {
    /// <summary>
    /// Defines the <see cref="DoubleExtensions" />.
    /// </summary>
    public static class DoubleExtensions
    {
        /// <summary>
        /// Restreint une valeur entre un ninimum et un maximum.
        /// </summary>
        /// <param name="value">Valeur à restreindre.</param>
        /// <param name="min">Minimum.</param>
        /// <param name="max">Maximum.</param>
        /// <returns>Valeur restreinte.</returns>
        public static double Clamp(this double value, double min, double max)
        {
            if (value < min) value = min;
            if (value > max) value = max;
            return value;
        }
    }
}
