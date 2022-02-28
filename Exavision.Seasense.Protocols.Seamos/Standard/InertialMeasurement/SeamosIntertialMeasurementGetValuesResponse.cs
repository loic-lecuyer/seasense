namespace Exavision.Seasense.Protocols.Seamos.Standard.InertialMeasurement {
    using Exavision.Seamos.Core.Extensions;
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.InertialMeasurement;

    /// <summary>
    /// Defines the <see cref="SeamosIntertialMeasurementGetValuesResponse" />.
    /// </summary>
    public class SeamosIntertialMeasurementGetValuesResponse : SeamosPascalCommand, IIntertialMeasurementGetValuesResponse {
        public override byte CommandByte1 => 0x00;
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x01;



        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.IntertialMeasurement;

        /// <summary>
        /// Gets or sets the AngleX.
        /// </summary>
        public double AngleX { get; set; }

        /// <summary>
        /// Gets or sets the AngleY.
        /// </summary>
        public double AngleY { get; set; }

        /// <summary>
        /// Gets or sets the AngleZ.
        /// </summary>
        public double AngleZ { get; set; }

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {

            // roll
            this.AngleX = data.GetMsbSignedShort(0) / 100D;
            // tilt
            this.AngleY = data.GetMsbSignedShort(2) / 100D;
            // yaw            
            this.AngleZ = data.GetMsbUnsignedShort(4) / 100D;

        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            return new byte[] {
                CommandByte1,
                CommandByte2,
                (byte)((int)this.AngleX),
                (byte)((int)this.AngleX >> 8),
                (byte)((int)this.AngleY),
                (byte)((int)this.AngleY >> 8),
                (byte)((int)this.AngleZ),
                (byte)((int)this.AngleZ >> 8) };
        }
    }
}
