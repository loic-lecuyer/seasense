namespace Exavision.Seasense.Protocols.Seamos.Standard.ElectronicCard {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.ElectronicCard;
    using System;

    /// <summary>
    /// Defines the <see cref="SeamosElectronicCardGetHardwareIdRequest" />.
    /// </summary>
    public class SeamosElectronicCardGetHardwareIdRequest : SeamosPascalCommand, IElectronicCardGetHardwareIdRequest
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x32;

        public override byte CommandByte1 => 0x80;

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
            throw new NotImplementedException();
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            return new byte[] { CommandByte1, CommandByte2 };
        }
    }
}
