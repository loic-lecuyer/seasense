namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    using Serilog;
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Defines the <see cref="SeamosCameraGetSoftwareVersionResponse" />.
    /// </summary>
    public class SeamosCameraGetSoftwareVersionResponse : SeamosPascalCommand, ICameraGetSoftwareVersionResponse {
        /// <summary>
        /// Gets or sets the SoftwareVersion.
        /// </summary>
        public string SoftwareVersion { get; set; }

        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public override byte CommandByte2 => 0x31;

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
            int length = Math.Min(0, data.Length);
            byte[] info = new byte[length];
            Array.Copy(data, info, length);
            this.SoftwareVersion = Encoding.ASCII.GetString(info);
            if (length < 10) {
                string log = "SeamosGetThermalCameraSoftwareVersionResponse invalid length " + length;
                Log.Warning(log);
            }
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public override byte[] SerializeBytes() {
            if (this.SoftwareVersion == null) this.SoftwareVersion = "1.0";
            List<byte> result = new List<byte>(new byte[] { CommandByte1, CommandByte2 });
            result.AddRange(Encoding.ASCII.GetBytes(this.SoftwareVersion));
            return result.ToArray();
        }
    }
}
