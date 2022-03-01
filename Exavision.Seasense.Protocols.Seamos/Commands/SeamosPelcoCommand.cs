namespace Exavision.Seasense.Protocols.Seamos.Commands {
    using Exavision.Seasense.Core.Extensions;
    using System;

    /// <summary>
    /// Defines the <see cref="SeamosPelcoCommand" />.
    /// </summary>
    public abstract class SeamosPelcoCommand : SeamosCommand {
        /// <summary>
        /// Gets the CommandByte1.
        /// </summary>
        public abstract byte CommandByte1 { get; }

        /// <summary>
        /// Gets the CommandByte2.
        /// </summary>
        public abstract byte CommandByte2 { get; }

        /// <summary>
        /// Gets or sets the DataByte1.
        /// </summary>
        public byte DataByte1 { get; set; }

        /// <summary>
        /// Gets or sets the DataByte2.
        /// </summary>
        public byte DataByte2 { get; set; }

        /// <summary>
        /// Gets or sets the ChannelByte.
        /// </summary>
        public byte ChannelByte { get; set; }

        /// <summary>
        /// The GetIntValue.
        /// </summary>
        /// <returns>The <see cref="int"/>.</returns>
        public int GetIntValue() {
            return ((int)this.DataByte1 << 8) + (int)this.DataByte2;
        }

        /// <summary>
        /// The SetChannel.
        /// </summary>
        /// <param name="channel">The channel<see cref="byte"/>.</param>
        /// <returns>The <see cref="SeamosPelcoCommand"/>.</returns>
        public SeamosPelcoCommand SetChannel(byte channel) {
            this.ChannelByte = channel;
            return this;
        }

        /// <summary>
        /// The SetIntValue.
        /// </summary>
        /// <param name="value">The value<see cref="int"/>.</param>
        /// <returns>The <see cref="SeamosPelcoCommand"/>.</returns>
        public SeamosPelcoCommand SetIntValue(int value) {
            this.DataByte1 = (byte)(value >> 8);
            this.DataByte2 = (byte)(value);
            return this;
        }

        /// <summary>
        /// Gets the ProtocolType.
        /// </summary>
        public override ProtocolType ProtocolType => ProtocolType.Pelco;

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.Turret;

        /// <summary>
        /// The Serialize.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] Serialize() {
            string data = SeamosProtocol.PROTOCOL_SEAMAOS_START;
            if (this.SystemTarget == SystemTarget.Computer) { data += SeamosProtocol.PROTOCOL_SEAMAOS_SYSTEM_TARGET_COMPUTER; }
            else if (this.SystemTarget == SystemTarget.ElectronicCard) { data += SeamosProtocol.PROTOCOL_SEAMAOS_SYSTEM_TARGET_ELECTRONIC_CARD; }
            else throw new NotImplementedException();
            string nbBytes = ((byte)12).ToHexString();
            data += nbBytes;
            data += "0" + ((int)this.ProtocolType).ToString("0");
            byte[] pelcoBytes = new byte[] { this.ChannelByte, this.CommandByte1, this.CommandByte2, this.DataByte1, this.DataByte2 };
            data += pelcoBytes.ToHexString();
            data += data.GetSeamosCheckSum();
            return data.HexStringToBytesArray();
        }
    }
}
