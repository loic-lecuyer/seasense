namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Core.Extensions;

    /// <summary>
    /// Defines the <see cref="Rect" />.
    /// </summary>
    public struct Rect {
        /// <summary>
        /// Gets or sets the Width.
        /// </summary>
        public double Width { get; set; }

        /// <summary>
        /// Gets or sets the Height.
        /// </summary>
        public double Height { get; set; }

        /// <summary>
        /// Gets or sets the X.
        /// </summary>
        public double X { get; set; }

        /// <summary>
        /// Gets or sets the Y.
        /// </summary>
        public double Y { get; set; }
    }

    /// <summary>
    /// Defines the <see cref="SeamosCameraUtils" />.
    /// </summary>
    public static class SeamosCameraUtils {
        /// <summary>
        /// The RectFromBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        /// <returns>The <see cref="Rect"/>.</returns>
        public static Rect RectFromBytes(byte[] data) {
            Rect rect = new Rect {
                X = data.GetMsbUnsignedShort(0),
                Y = data.GetMsbUnsignedShort(2),
                Width = data.GetMsbUnsignedShort(4),
                Height = data.GetMsbUnsignedShort(6)
            };
            return rect;
        }

        /// <summary>
        /// The BytesFromRect.
        /// </summary>
        /// <param name="rect">The rect<see cref="Rect"/>.</param>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public static byte[] BytesFromRect(Rect rect) {
            byte[] result = new byte[8];
            result[0] = (byte)((int)rect.X);
            result[1] = (byte)((int)rect.X >> 8);
            result[2] = (byte)((int)rect.Y);
            result[3] = (byte)((int)rect.Y >> 8);
            result[4] = (byte)((int)rect.Width);
            result[5] = (byte)((int)rect.Width >> 8);
            result[6] = (byte)((int)rect.Height);
            result[7] = (byte)((int)rect.Height >> 8);
            return result;
        }
    }
}
