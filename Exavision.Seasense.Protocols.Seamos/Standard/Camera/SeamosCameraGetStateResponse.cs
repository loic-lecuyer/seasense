namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {

    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    using Exavision.Seasense.Protocols.Seamos.Enums;

    /// <summary>
    /// Defines the <see cref="SeamosCameraGetStateResponse" />.
    /// </summary>
    public class SeamosCameraGetStateResponse : SeamosPascalCommand, ICameraGetStateResponse {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x26;

        public override byte CommandByte1 => 0x00;
        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// Gets or sets the State.
        /// </summary>
        public ThorState State { get; set; }

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {
            ThorState result = (ThorState)data[0];

            this.State = result;
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            return new byte[] { this.CommandByte1, this.CommandByte2 };
        }
    }
}
