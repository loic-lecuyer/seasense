using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Core.Extensions {

    /// <summary>
    /// Usefull extension method of Byte and Byte[] class
    /// </summary>
    public static class ByteExtensions {

        /// <summary>
        /// Restrict value beetween min and max
        /// </summary>
        /// <param name="value">Value</param>
        /// <param name="min">Minimum value</param>
        /// <param name="max">Maximum value</param>
        /// <returns>Restricted value</returns>
        public static byte Clamp(this byte value, int min, int max) {
            if (value < min) value = (byte)min;
            if (value > max) value = (byte)max;
            return value;
        }

        /// <summary>
        /// Find sequence of number in list of byte
        /// @TODO : Replace by TryFind (No -1 return)
        /// </summary>
        /// <param name="buff">Source list of byte</param>
        /// <param name="search">Number sequence to find</param>
        /// <returns>Index of the number sequence in source list of byte or -1 if not find</returns>
        public static int Find(this List<byte> buff, params int[] search) {
            byte[] pattern = new byte[search.Length];
            for (int i = 0; i < search.Length; i++) {
                pattern[i] = (byte)search[i];
            }
            return buff.Find(pattern);
        }


        /// <summary>
        /// Find sequence of byte in list of byte
        /// @TODO Transform to TryFind (no return -1)
        /// </summary>
        /// <param name="buff">source list of byte</param>
        /// <param name="search">searched byte sequence</param>
        /// <returns>Index of sequence or -1 if not find</returns>       
        public static int Find(this List<byte> buff, params byte[] search) {
            if (buff.Count == 0) return -1;
            int end = buff.Count;
            for (int i = 0; i < end; i++) {
                bool findSequence = true;
                for (int j = 0; j < search.Length; j++) {
                    if ((i + j) < buff.Count) {
                        if (buff[i + j] != search[j]) {
                            findSequence = false;
                            break;
                        }
                    }
                    else {
                        findSequence = false;
                        break;
                    }

                }
                if (findSequence) return i;
            }
            return -1;
        }


        public static int Find(this List<byte> buff, int startIndex, params byte[] search) {
            if (buff.Count == 0) return -1;
            int end = buff.Count;
            for (int i = startIndex; i < end; i++) {
                bool findSequence = true;
                for (int j = 0; j < search.Length; j++) {
                    if ((i + j) < buff.Count) {
                        if (buff[i + j] != search[j]) {
                            findSequence = false;
                            break;
                        }
                    }
                    else {
                        findSequence = false;
                        break;
                    }

                }
                if (findSequence) return i;
            }
            return -1;
        }

        /// <summary>
        /// Find sequence of number in array of byte
        /// @TODO Transform to TryFind (no return -1)
        /// </summary>
        /// <param name="buff">source array of byte</param>
        /// <param name="search">searched number sequence</param>
        /// <returns>Index of sequence in source array or -1 if not find</returns>
        public static int Find(this byte[] buff, params int[] search) {
            if (buff.Length == 0) return -1;
            int end = buff.Length;
            for (int i = 0; i < end; i++) {
                bool findSequence = true;
                for (int j = 0; j < search.Length; j++) {
                    if (buff[i + j] != search[j]) {
                        findSequence = false;
                        break;
                    }
                }
                if (findSequence) return i;
            }
            return -1;
        }

        /// <summary>
        /// Find sequence of byte in byte array
        /// @TODO Transform to TryFind (no return -1)
        /// </summary>
        /// <param name="buff">Source byte array</param>
        /// <param name="search">Searched byte sequence</param>
        /// <returns>Searched byte sequence index in source byte array or -1 if not find</returns>
        public static int Find(this byte[] buff, byte[] search) {
            if (buff.Length == 0) return -1;
            int endIter = buff.Length;
            for (int start = 0; start < endIter; start++) {
                if (buff[start] == search[0]) {
                    int next;
                    bool finded = true;
                    for (next = 1; next < search.Length; next++) {
                        if (buff[start + next] != search[next]) {
                            finded = false;
                            break;
                        }
                    }
                    if (finded) {
                        return start;
                    }
                }
            }
            return -1;
        }

        /// <summary>
        /// Find sequence of number in list of byte in reverse order
        /// @TODO Transform to TryFindReverse (no return -1)
        /// </summary>
        /// <param name="buff">Source byte list</param>
        /// <param name="search">Searched number sequence</param>
        /// <returns>Searched byte sequence index in source byte list or -1 if not find</returns>
        public static int FindReverse(this List<byte> buff, params int[] search) {
            if (buff.Count == 0) return -1;
            int start = (buff.Count - 1);
            for (int i = start; i >= 0; i--) {
                bool findSequence = true;
                for (int j = 0; j < search.Length; j++) {
                    if (buff[i + j] != search[j]) {
                        findSequence = false;
                        break;
                    }
                }
                if (findSequence) return i;
            }
            return -1;
        }

        /// <summary>
        /// Find sequence of number in array of byte in reverse order
        /// @TODO Transform to TryFindReverse (no return -1)
        /// </summary>
        /// <param name="buff">Source byte array</param>
        /// <param name="search">Searched number sequence</param>
        /// <returns>Searched number sequence index in source byte array or -1 if not find</returns>
        public static int FindReverse(this byte[] buff, params int[] search) {
            if (buff.Length == 0) return -1;
            int start = (buff.Length - 1);
            for (int i = start; i >= 0; i--) {
                bool findSequence = true;
                for (int j = 0; j < search.Length; j++) {
                    if (buff[i + j] != search[j]) {
                        findSequence = false;
                        break;
                    }
                }
                if (findSequence) return i;
            }
            return -1;
        }

        /// <summary>
        /// Find sequence of byte in array of byte in reverse order
        /// @TODO Transform to TryFindReverse (no return -1)
        /// </summary>
        /// <param name="buff">Source byte array</param>
        /// <param name="search">Searched byte sequence</param>
        /// <returns>Searched byte sequence index in source byte array or -1 if not find</returns>
        public static int FindReverse(this byte[] buff, byte[] search) {
            if (buff.Length == 0) return -1;
            int startIter = buff.Length - 1;
            int searchLength = search.Length;
            for (int start = startIter; start >= 0; start--) {
                if (buff[start] == search[0]) {
                    int next;
                    bool finded = true;
                    for (next = 1; next < searchLength; next++) {
                        if (buff[start + next] != search[next]) {
                            finded = false;
                            break;
                        }

                    }

                    if (finded) {
                        return start;
                    }

                }
            }
            return -1;
        }

        /// <summary>
        /// Defines letter in Hexadeciaml alphabet
        /// </summary>
        private static readonly string HexAlphabet = "0123456789ABCDEF";

        /// <summary>
        /// Convert byte array to string in Uppercase
        /// </summary>
        /// <param name="bytes">Byte array to convert</param>
        /// <returns>String representation of byte array in UpperCase</returns>
        public static string ToHexString(this byte[] bytes) {
            StringBuilder result = new StringBuilder();
            foreach (byte B in bytes) {
                int firstIndex = (B >> 4);
                int secondIndex = (B & 0xF);
                result.Append(HexAlphabet[firstIndex]);
                result.Append(HexAlphabet[secondIndex]);

            }
            return result.ToString().ToUpper();
        }

        /// <summary>
        /// Convert byte to string in Uppercase
        /// </summary>
        /// <param name="b">Byte to convert</param>
        /// <returns>String representation of byte array in UpperCase</returns>
        public static string ToHexString(this byte b) {
            int firstIndex = (b >> 4);
            int secondIndex = (b & 0xF);
            StringBuilder result = new StringBuilder();
            result.Append(HexAlphabet[firstIndex]);
            result.Append(HexAlphabet[secondIndex]);
            return result.ToString().ToUpper();
        }
        /// <summary>
        /// Check value of bit inside byte
        /// </summary>
        /// <param name="data">Source byte value</param>
        /// <param name="index">Index of bit</param>
        /// <returns>True/False value of the bit</returns>
        public static bool GetBit(this byte data, int index) {
            return new BitArray(new byte[] { data }).Get(index);
        }



        /// <summary>
        /// Extract unsigned short from byte array in most significant bit first order
        /// </summary>
        /// <param name="data">Source byte array</param>
        /// <param name="index">Start index</param>
        /// <returns>Unisgned short value</returns>
        public static short GetMsbSignedShort(this byte[] data, int index) {
            byte[] reversed = new byte[] { data[index + 1], data[index] };
            short result = BitConverter.ToInt16(reversed, 0);
            return result;

        }
        /// <summary>
        /// Extract unsigned short from byte array in low significant bit first order
        /// </summary>
        /// <param name="data">Source byte array</param>
        /// <param name="index">Start index</param>
        /// <returns>Unisgned short value</returns>
        public static ushort GetLsbUnsignedShort(this byte[] data, int index) {
            ushort result = (ushort)((((int)data[index + 1]) << 8) + (int)data[index]);
            return result;
        }
        /// <summary>
        /// Set unsinged most significant bit first order value inside byte array
        /// </summary>
        /// <param name="data">Source byte array</param>
        /// <param name="index">Start index</param>
        /// <param name="value">Value to iject in byte array</param>
        public static void SetMsbUnsignedShort(this byte[] data, int index, ushort value) {
            data[index] = (byte)(value >> 8);
            data[index + 1] = (byte)(value & 0xFF);
        }
        /// <summary>
        /// Extract unsigned short from byte array in most significant bit first order
        /// </summary>
        /// <param name="data">Source byte array</param>
        /// <param name="index">Start index</param>
        /// <returns>Unisgned short value</returns>
        public static ushort GetMsbUnsignedShort(this byte[] data, int index) {
            ushort result = (ushort)((((int)data[index]) << 8) + (int)data[index + 1]);
            return result;

        }



    }
}
