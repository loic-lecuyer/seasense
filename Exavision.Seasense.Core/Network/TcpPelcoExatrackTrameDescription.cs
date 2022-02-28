namespace Exavision.Seasense.Core.Network {
    /// <summary>
    /// Defines the <see cref="TcpPelcoExatrackTrameDescription" />.
    /// </summary>
    public class TcpPelcoExatrackTrameDescription : TcpPelcoTrameDescription {
        /// <summary>
        /// Gets the StartByte.
        /// </summary>
        public override byte StartByte => 0xf5;

        /// <summary>
        /// Gets the Length.
        /// </summary>
        public override int Length => 14;

        /// <summary>
        /// Compute Pleco checksum from byte array 
        /// </summary>
        /// <param name="data">Pelco message byte array</param>
        /// <returns>Byte of checksum for pelco message</returns>
        public override byte Checksum(byte[] data) {
            int sum = 0;
            for (int i = 1; i <= 12; i++) {
                sum += data[i];
            }
            return (byte)(sum + 127);
        }
    }
}
