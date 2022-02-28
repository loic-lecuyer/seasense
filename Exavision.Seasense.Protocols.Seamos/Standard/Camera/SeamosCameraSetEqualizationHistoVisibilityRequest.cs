namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetEqualizationHistoVisibilityRequest" />.
    /// </summary>
    public class SeamosCameraSetEqualizationHistoVisibilityRequest : SeamosPascalCommand, ICameraSetEqualizationHistoVisibilityRequest
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsVisible.
        /// </summary>
        public bool IsVisible { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x1C;

        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data)
        {
            this.IsVisible = data[0] == 0x01;
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            byte visibleByte = 0x00;
            if (IsVisible) { visibleByte = 0x01; }
            return new byte[] { CommandByte1, CommandByte2, visibleByte };
        }
    }
}
