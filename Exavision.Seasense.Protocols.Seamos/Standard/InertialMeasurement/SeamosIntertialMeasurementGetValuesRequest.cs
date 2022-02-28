namespace Exavision.Seasense.Protocols.Seamos.Standard.InertialMeasurement {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.InertialMeasurement;

    /// <summary>
    /// Defines the <see cref="SeamosIntertialMeasurementGetValuesRequest" />.
    /// </summary>
    public class SeamosIntertialMeasurementGetValuesRequest : SeamosPascalCommand, IIntertialMeasurementGetValuesRequest {

        /// <summary>
        /// 
        /// </summary>
        public override byte CommandByte1 => 0x80;
        /// <summary>
        /// 
        /// </summary>
        public override byte CommandByte2 => 0x01;
        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.IntertialMeasurement;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            return new byte[] { CommandByte1, CommandByte2 };
        }
    }
}
