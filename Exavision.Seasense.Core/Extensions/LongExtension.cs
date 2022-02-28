namespace Exavision.Seasense.Core.Extensions {
    /// <summary>
    /// Usefull extension for Long Class
    /// </summary>
    public static class LongExtension {
        /// <summary>
        /// Convert byte array length to MB
        /// </summary>
        /// <param name="bytes">Length of byte array</param>
        /// <returns>Number of MB</returns>
        public static long ConvertBytesToMegabytes(this long bytes) {
            return (long)((bytes / 1024D) / 1024D);
        }
    }
}
