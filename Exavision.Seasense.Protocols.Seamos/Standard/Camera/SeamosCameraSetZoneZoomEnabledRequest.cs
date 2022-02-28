namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

    /// <summary>
    /// Defines the <see cref="SeamosCameraSetZoneZoomEnabledRequest" />.
    /// </summary>
    public class SeamosCameraSetZoneZoomEnabledRequest : SeamosPascalCommand, ICameraSetZoneZoomEnabledRequest
    {
        /// <summary>
        /// Gets or sets a value indicating whether IsEnabled.
        /// </summary>
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x1D;

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
            IsEnabled = data[0] == 0x01;
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            byte enableByte = 0x00;
            if (IsEnabled) { enableByte = 0x01; }
            return new byte[] { CommandByte1, CommandByte2, enableByte };
        }
    }
}
