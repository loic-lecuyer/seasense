using System;
using System.Collections;

namespace Exavision.Seasense.Core.Extensions {


    /// <summary>
    /// Usefull extension methode on BitArray
    /// </summary>
    public static class BitArrayExtensions {
        /// <summary>
        /// Convert BitArray to byte[]
        /// </summary>
        /// <param name="bits">Source BitArray</param>
        /// <param name="count">Number of byte to convert</param>
        /// <returns>byte[] with  count * 2 as length</returns>
        public static byte[] GetBytes(this BitArray bits, int count) {
            byte[] bytes = new byte[count * 2];
            bits.CopyTo(bytes, 0);
            return bytes;
        }
        /// <summary>
        /// Convert BitArray to int
        /// </summary>
        /// <param name="bits">Source BitArray</param>
        /// <param name="index">Start index</param>
        /// <param name="count">Number of byte to convert</param>
        /// <returns>int value, sum of power of two for each bit has true</returns>
        public static int GetNumberValue(this BitArray bits, int index, int count) {
            int powIndex = 0;
            int val = 0;
            for (int i = index; i < (index + count); i++) {
                if (bits.Get(i)) {
                    val += (int)Math.Pow(2, powIndex);

                }
                powIndex++;
            }
            return val;
        }

        /// <summary>
        /// Convert int value to BitArray
        /// </summary>
        /// <param name="bits">Source BitArray</param>
        /// <param name="value">Int value to convert</param>
        /// <param name="index">Start index in BitArray</param>
        /// <param name="count">Number of bit used to convert</param>      
        public static void SetNumberValue(this BitArray bits, int value, int index, int count) {
            int sum = value;
            for (int i = (index + count - 1); i >= (index); i--) {
                int maxPow = (int)Math.Pow(2, i - index);
                if (sum >= maxPow) {
                    bits.Set(i, true);
                    sum -= maxPow;
                }
                else {
                    bits.Set(i, false);
                }
            }
        }
    }
}
