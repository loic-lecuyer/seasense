namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetGammaRequest" />.
    /// </summary>
    public class SeamosCameraSetGammaRequest : SeamosPascalCommand, ICameraSetGammaRequest {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x0F;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the Gamma.
        /// </summary>
        public double Gamma { get; set; }

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {
            this.Gamma = (((int)data[1]) << 8) + (int)data[0];
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            return new byte[] { CommandByte1, this.CommandByte2, (byte)((int)Gamma), (byte)((int)Gamma >> 8) };
        }
    }
}
