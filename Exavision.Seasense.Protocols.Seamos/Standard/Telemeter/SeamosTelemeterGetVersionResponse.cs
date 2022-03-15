namespace Exavision.Seasense.Protocols.Seamos.Standard.Telemeter {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Defines the <see cref="SeamosTelemeterGetVersionResponse" />.
    /// </summary>
    public class SeamosTelemeterGetVersionResponse : SeamosPascalCommand, ITelemeterGetVersionResponse {
        /// <summary>
        /// Gets or sets the Message.
        /// </summary>
        public String Message { get; set; } = "";

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.Telemeter;

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x12;

        public override byte CommandByte1 => 0x00;
        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
      
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public override void DeserializeBytes(byte[] data) {

            /// @TODO : Very strange hack !!!
            if (data.Length > 0) {
                byte[] reduced = new byte[data.Length - 1];
                Array.Copy(data, reduced, reduced.Length);
                data = reduced;
            }
            this.Message = Encoding.ASCII.GetString(data);
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            List<byte> data = new List<byte>();
            data.Add(CommandByte1);
            data.Add(CommandByte2);
            data.AddRange( Encoding.ASCII.GetBytes(this.Message));
            return data.ToArray();
        }
    }
}
