namespace Exavision.Seasense.Core.Network {
    /// <summary>
    /// Defines the <see cref="TcpPelcoExatrack2TrameDescription" />.
    /// </summary>
    public class TcpPelcoExatrack2TrameDescription : TcpPelcoTrameDescription {
        /// <summary>
        /// Gets the StartByte.
        /// </summary>
        public override byte StartByte => 0xf7;

        /// <summary>
        /// Gets the Length.
        /// </summary>
        public override int Length => 16;

        /// <summary>
        /// Compute pelco Checksum
        /// </summary>
        /// <param name="data">Source byte array from pelco message</param>
        /// <returns>Checksum byte of pelco message</returns>
        public override byte Checksum(byte[] data) {
            int sum = 0;
            for (int i = 1; i <= 14; i++) {
                sum += data[i];
            }
            sum += 127;
            return (byte)sum;
        }
    }
}
