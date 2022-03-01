namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Core.Extensions;
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    /// <summary>
    /// Defines the <see cref="SeamosCameraSetZoneEqualizationRequest" />.
    /// </summary>
    public class SeamosCameraSetZoneEqualizationRequest : SeamosPascalCommand, ICameraSetZoneEqualizationRequest {
        /// <summary>
        /// Gets or sets the X.
        /// </summary>
        public double X { get; set; }

        /// <summary>
        /// Gets or sets the Y.
        /// </summary>
        public double Y { get; set; }

        /// <summary>
        /// Gets or sets the Width.
        /// </summary>
        public double Width { get; set; }

        /// <summary>
        /// Gets or sets the Height.
        /// </summary>
        public double Height { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x03;

        public override byte CommandByte1 => 0x00;


        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {
            this.X = data.GetMsbUnsignedShort(2);
            this.Y = data.GetMsbUnsignedShort(2);
            this.Width = data.GetMsbUnsignedShort(4);
            this.Height = data.GetMsbUnsignedShort(6);
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            return new byte[] {
                CommandByte1,
                CommandByte2,
                (byte)((int)this.X),
                (byte)((int)this.X >> 8),
                (byte)((int)this.Y),
                (byte)((int)this.Y >> 8),
                (byte)((int)this.Width),
                (byte)((int)this.Width >> 8),
                (byte)((int)this.Height),
                (byte)((int)this.Height >> 8)
            };
        }
    }
}
