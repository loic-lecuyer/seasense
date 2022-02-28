using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
namespace Exavision.Seasense.Core.Extensions {
    /// <summary>
    /// Defines the <see cref="StringExtensions" />.
    /// </summary>
    public static class StringExtensions {
        /// <summary>
        /// Convertie un chaine en nom de fichier valide.
        /// </summary>
        /// <param name="name">The name<see cref="string"/>Le nom de fichier éventuelement invalide.</param>
        /// <returns>The <see cref="string"/>Le nom de fichier valide.</returns>
        public static string ToValidFileName(this string name) {
            string invalidChars = Regex.Escape(new string(Path.GetInvalidFileNameChars()));
            string invalidRegStr = string.Format(@"([{0}]*\.+$)|([{0}]+)", invalidChars);
            return Regex.Replace(name, invalidRegStr, "_");
        }


        /// <summary>
        /// Parse zoom level string with format 1,1.2,1.4,2.5
        /// </summary>
        /// <param name="dayCameraZooms">Zoom level string </param>
        /// <returns>List of zoom multiplier</returns>
        public static List<double> ParseZoomLevels(this string dayCameraZooms) {
            string separator = ",";
            if (dayCameraZooms.IndexOf(";") != -1) {
                separator = ";";
            }
            else if (dayCameraZooms.IndexOf("|") != -1) {
                separator = "|";
            }
            string[] zoomStrs = dayCameraZooms.Split(separator.ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            List<double> zooms = new List<double>();
            foreach (string zoomStr in zoomStrs) {
                if (Double.TryParse(zoomStr.Trim(), NumberStyles.AllowDecimalPoint, CultureInfo.InvariantCulture, out double zoomValue)) {
                    zooms.Add(zoomValue);
                }
            }
            zooms = (from z in zooms orderby z select z).ToList();
            return zooms;
        }

        /// <summary>
        /// Rnvoie la valeur entière héxadécimal d'un char.
        /// </summary>
        /// <param name="hex">The hex<see cref="char"/>Le char à convertir.</param>
        /// <returns>The <see cref="int"/>Valeur entière représantant la valeur héxadécimal.</returns>
        private static int GetHexVal(char hex) {
            int val = (int)hex;
            int valAlt = val < 97 ? 55 : 87;
            return val - (val < 58 ? 48 : valAlt);
        }

        /// <summary>
        /// Calcul un checksum Seamos.
        /// </summary>
        /// <param name="result">The result<see cref="string"/>.</param>
        /// <returns>The <see cref="string"/>.</returns>
        public static string GetSeamosCheckSum(this string result) {
            byte[] data = Encoding.ASCII.GetBytes(result);
            int sum = 0;
            for (int i = 0; i < data.Length; i++) {
                sum += (int)data[i];
            }
            sum %= 256;
            return new byte[] { (byte)sum }.ToHexString();
        }

        /// <summary>
        /// Convert string hexadecimal representation to byte array
        /// </summary>
        /// <param name="hex">Input string in hexadecimal format</param>
        /// <returns>Byte array</returns>
        public static byte[] HexStringToBytesArray(this string hex) {
            if (hex.Length % 2 == 1)
                throw new ArgumentException("The binary key cannot have an odd number of digits");

            byte[] arr = new byte[hex.Length >> 1];

            for (int i = 0; i < hex.Length >> 1; ++i) {
                arr[i] = (byte)((GetHexVal(hex[i << 1]) << 4) + (GetHexVal(hex[(i << 1) + 1])));
            }

            return arr;
        }
    }
}
