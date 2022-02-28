namespace Exavision.Seasense.Core.Extensions {
    using global::System;
    using global::System.Net;
    using global::System.Net.Sockets;
    using Serilog;

    /// <summary>
    /// Defines the <see cref="SocketExtensions" />.
    /// </summary>
    public static class SocketExtensions
    {
        /// <summary>
        /// Tente une connexion sur un point de terminsaison réseau.
        /// </summary>
        /// <param name="socket">Le socket a connecté.</param>
        /// <param name="endpoint">Le point de terminaison du socket.</param>
        /// <param name="timeout">Le temps maximal de connexion.</param>
        /// <returns>.</returns>
        public static bool TryConnect(this Socket socket, EndPoint endpoint, TimeSpan timeout)
        {
            try
            {
                socket.Connect(endpoint, timeout);
                return true;
            }
            catch (Exception ex)
            {

                string log = "SocketExtensions TryConnect Fail " + ex.Message;                
                Log.Warning(log);
                return false;
            }
        }

        /// <summary>
        /// Connexion asynchrone resynchronisé.
        /// </summary>
        /// <param name="socket">Le socket a connecté.</param>
        /// <param name="endpoint">Le point de terminaison du socket.</param>
        /// <param name="timeout">Le temps maximal de connexion.</param>
        public static void Connect(this Socket socket, EndPoint endpoint, TimeSpan timeout)
        {
            var result = socket.BeginConnect(endpoint, null, null);
            bool success = result.AsyncWaitHandle.WaitOne(timeout, true);
            if (success)
            {
                socket.EndConnect(result);
            }
            else
            {
                socket.Close();
                throw new SocketException(10060); // Connection timed out.
            }
        }
    }
}
