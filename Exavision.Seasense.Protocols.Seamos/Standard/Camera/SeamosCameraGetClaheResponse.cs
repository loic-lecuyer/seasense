using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    public class SeamosCameraGetClaheResponse : SeamosPascalCommand,ICameraGetClaheResponse
    {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x36;

        public override byte CommandByte1 => 0x00;



        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.ThermalCamera;
        public bool IsEnabled { get; set; }

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data)
        {
            this.IsEnabled = (data[0] == 0x01);
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            if (IsEnabled)
            {
                return new byte[] { CommandByte1,CommandByte2, 0x01 };
            }
            else
            {
                return new byte[] { CommandByte1, CommandByte2, 0x00 };
            }
        }
    }
}
