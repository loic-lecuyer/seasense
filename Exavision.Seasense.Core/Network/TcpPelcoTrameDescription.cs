namespace Exavision.Seasense.Core.Network {
    /// <summary>
    /// Defines the <see cref="TcpPelcoTrameDescription" />.
    /// </summary>
    public abstract class TcpPelcoTrameDescription {
        /// <summary>
        /// Gets the StartByte.
        /// </summary>
        public abstract byte StartByte { get; }

        /// <summary>
        /// Gets the Length.
        /// </summary>
        public abstract int Length { get; }

        /// <summary>
        /// Compute Pleco checksum from byte array 
        /// </summary>
        /// <param name="data">Pelco message byte array</param>
        /// <returns>Byte of checksum for pelco message</returns>
        public abstract byte Checksum(byte[] data);
    }
}
