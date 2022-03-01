namespace Exavision.Seasense.Protocols.Seamos.Commands {
    using Exavision.Seasense.Core.Extensions;
    using System;

    /// <summary>
    /// Defines the <see cref="SeamosPascalCommand" />.
    /// </summary>
    public abstract class SeamosPascalCommand : SeamosCommand {
        /// <summary>
        /// Gets the CommandByte.
        /// </summary>
        public abstract byte CommandByte2 { get; }

        public abstract byte CommandByte1 { get; }



        /// <summary>
        /// Gets the ProtocolType.
        /// </summary>
        public override ProtocolType ProtocolType => ProtocolType.Pascal;

        /// <summary>
        /// The Serialize.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public byte[] Serialize() {
            string data = SeamosProtocol.PROTOCOL_SEAMAOS_START;
            if (this.SystemTarget == SystemTarget.Computer) { data += SeamosProtocol.PROTOCOL_SEAMAOS_SYSTEM_TARGET_COMPUTER; }
            else if (this.SystemTarget == SystemTarget.ElectronicCard) { data += SeamosProtocol.PROTOCOL_SEAMAOS_SYSTEM_TARGET_ELECTRONIC_CARD; }
            else throw new NotImplementedException();
            // Materiel Cible et protocol
            string dataBody = ((int)this.MaterialTarget).ToString("0") + ((int)this.ProtocolType).ToString("0");
            byte[] databytes = this.SerializeBytes();
            dataBody += databytes.ToHexString();
            int length = dataBody.Length;
            data += length.ToString("00");
            data += dataBody;
            data += data.GetSeamosCheckSum();
            return data.HexStringToBytesArray();
        }

        /// <summary>
        /// The SerializeBytes.
        /// </summary>
        /// <returns>The <see cref="byte[]"/>.</returns>
        public abstract byte[] SerializeBytes();

        /// <summary>
        /// The DeserializeBytes.
        /// </summary>
        /// <param name="data">The data<see cref="byte[]"/>.</param>
        public abstract void DeserializeBytes(byte[] data);
    }
}
