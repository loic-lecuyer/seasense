using System;
using System.Collections.Generic;
using System.Net;

namespace Exavision.Seasense.Core.Network {
    /// <summary>
    /// Defines the <see cref="IStringClient" />.
    /// </summary>
    public interface IStringClient {
        /// <summary>
        /// The Start.
        /// </summary>
        /// <param name="endPoint">The endPoint<see cref="EndPoint"/>.</param>
        /// <param name="separator">The separator<see cref="string"/>.</param>
        void Start(EndPoint endPoint, string separator);
        /// <summary>
        /// The Send.
        /// </summary>
        /// <param name="data">The data<see cref="string"/>.</param>
        /// <returns>The <see cref="bool"/>.</returns>
        bool Send(string data);
        /// <summary>
        /// The Stop.
        /// </summary>
        void Stop();
        /// <summary>
        /// Defines the OnMessageReceived.
        /// </summary>
        event EventHandler<String> OnMessageReceived;
        /// <summary>
        /// Get Latest network communication message
        /// </summary>
        /// <returns>List of string representation of network message (hexadecimal string)</returns>
        List<string> GetLatestMessages();
        /// <summary>
        /// Gets the Connected
        /// Gets a value indicating whether Connected..
        /// </summary>
        bool Connected { get; }
    }
}
