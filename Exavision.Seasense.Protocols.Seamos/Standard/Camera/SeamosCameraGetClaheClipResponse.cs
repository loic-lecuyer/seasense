using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using System;

namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    public  class SeamosCameraGetClaheClipResponse : SeamosPascalCommand, ICameraGetClaheClipResponse
    {
        public short Clip { get; set; }
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x37;

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
          
            this.Clip =(short) BitConverter.ToUInt16(data,0) ;

        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes()
        {
            byte[] data = BitConverter.GetBytes(Clip);
            return new byte[] { CommandByte1, CommandByte2, data[0], data[1] };
        }
    }
}
