namespace Exavision.Seasense.Core.Network {
    /// <summary>
    /// Defines the <see cref="TcpPelcoDefaultTrameDescription" />.
    /// </summary>
    public class TcpPelcoDefaultTrameDescription : TcpPelcoTrameDescription {
        /// <summary>
        /// Gets the StartByte.
        /// </summary>
        public override byte StartByte => 0xff;

        /// <summary>
        /// Gets the Length.
        /// </summary>
        public override int Length => 7;

        /// <summary>
        /// Compute Pleco checksum from byte array 
        /// </summary>
        /// <param name="data">Pelco message byte array</param>
        /// <returns>Byte of checksum for pelco message</returns>
        public override byte Checksum(byte[] data) {
            byte checkSum = (byte)(
                    ((int)data[1] +
                    (int)data[2] +
                    (int)data[3] +
                    (int)data[4] +
                    (int)data[5])
                    % 256);
            return checkSum;
        }
    }
}
