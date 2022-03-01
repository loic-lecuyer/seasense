namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    using Exavision.Seasense.Protocols.Seamos.Enums;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetReticuleModeRequest" />.
    /// </summary>
    public class SeamosCameraSetReticuleModeRequest : SeamosPascalCommand, ICameraSetReticuleModeRequest
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x2F;
        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        public ReticuleMode Mode { get; set; }

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data)
        {
            if (data[0] == 0x02)
            {
                this.Mode = ReticuleMode.Auto;
            }
            else if (data[0] == 0x00)
            {
                this.Mode = ReticuleMode.Negatif;
            }
            else if (data[0] == 0x01)
            {
                this.Mode = ReticuleMode.Positif;
            }
            else if (data[0] == 0x10)
            {
                this.Mode = ReticuleMode.Off;
            }
            else
            {
                this.Mode = ReticuleMode.Auto;
            }
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            byte modeByte;
            switch (this.Mode)
            {
                case ReticuleMode.Auto:
                    modeByte = 0x02;
                    break;
                case ReticuleMode.Negatif:
                    modeByte = 0x00;
                    break;
                case ReticuleMode.Positif:
                    modeByte = 0x01;
                    break;
                case ReticuleMode.Off:
                    modeByte = 0x10;
                    break;
                default:
                    modeByte = 0x02;
                    break;
            }
            return new byte[] { CommandByte1, CommandByte2, modeByte };
        }
    }
}
