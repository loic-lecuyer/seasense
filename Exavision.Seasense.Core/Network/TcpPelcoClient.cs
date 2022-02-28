namespace Exavision.Seasense.Core.Network {
    using global::System;
    using global::System.Collections.Generic;
    using Serilog;

    /// <summary>
    /// Defines the <see cref="TcpPelcoClient" />.
    /// </summary>
    public class TcpPelcoClient : TcpByteClient {
        /// <summary>
        /// Defines the trameDescriptions.
        /// </summary>
        private readonly List<TcpPelcoTrameDescription> trameDescriptions;
        /// <summary>
        /// Create TcpPelcoClient instance
        /// </summary>
        public TcpPelcoClient() : base() {

            this.trameDescriptions = new List<TcpPelcoTrameDescription>
            {
                new TcpPelcoDefaultTrameDescription(),
                new TcpPelcoExatrackTrameDescription(),
                new TcpPelcoExatrack2TrameDescription()
            };
        }


        /// <summary>
        /// Try to extract trame from description
        /// </summary>
        /// <param name="circularBuffer">List of byte readed</param>
        /// <param name="trame">Byte Array trame conform to description</param>
        /// <returns></returns>
        public override bool TryExtractTrame(List<byte> circularBuffer, out byte[] trame) {
            trame = null;
            // On recherche la trame la plus près du début
            int minStartIndex = this.GetMinStartIndex(circularBuffer, trameDescriptions);

            if (minStartIndex != int.MaxValue && minStartIndex > -1) {
                foreach (TcpPelcoTrameDescription trameDescription in trameDescriptions) {
                    if (this.CheckTrame(minStartIndex, circularBuffer, trameDescription, out byte[] tramePelco)) {
                        trame = tramePelco;
                        return true;
                    }
                }
            }
            this.CleanBuffer(circularBuffer);
            return false;
        }

        private void CleanBuffer(List<byte> circularBuffer) {
            // Cas particulier ou la communication est tout le temps perturbé, 
            // si aucun début ni fin de trame n'arrive pendant trop logntemps le buffer peut augmenter à l'infini
            if (circularBuffer.Count > 65535) {
                circularBuffer.Clear();
            }
        }

        private int GetMinStartIndex(List<byte> circularBuffer, List<TcpPelcoTrameDescription> trameDescriptions) {
            int minStartIndex = int.MaxValue;
            foreach (TcpPelcoTrameDescription trameDescription in trameDescriptions) {
                int startByteIndex = circularBuffer.IndexOf(trameDescription.StartByte);
                if (startByteIndex > -1 && startByteIndex < minStartIndex) {
                    minStartIndex = startByteIndex;
                }
            }
            return minStartIndex;
        }

        private bool CheckTrame(int minStartIndex, List<byte> circularBuffer, TcpPelcoTrameDescription trameDescription, out byte[] tramePelco) {
            tramePelco = null;
            int startByteIndex = circularBuffer.IndexOf(trameDescription.StartByte);
            if (minStartIndex == startByteIndex && startByteIndex != -1 && circularBuffer.Count >= (startByteIndex + trameDescription.Length)) {
                byte[] commandBytes = new byte[trameDescription.Length];
                Array.Copy(circularBuffer.ToArray(), startByteIndex, commandBytes, 0, trameDescription.Length);
                byte checkSum = trameDescription.Checksum(commandBytes);
                if (checkSum == commandBytes[commandBytes.Length - 1]) {
                    tramePelco = commandBytes;
                    circularBuffer.RemoveRange(0, startByteIndex + trameDescription.Length);
                    if (startByteIndex != 0) {
                        Log.Error("TcpPelcoClient , Invalid part of pelco message");
                    }
                    return true;
                }
            }
            return false;
        }
    }
}
