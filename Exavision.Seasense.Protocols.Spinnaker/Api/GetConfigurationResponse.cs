namespace Exavision.Seasense.Protocols.Spinnaker.Api {
    using Exavision.Seasense.Protocols.Spinnaker.Models;

    /// <summary>
    /// Defines the <see cref="GetConfigurationResponse" />.
    /// </summary>
    public class GetConfigurationResponse : SpinnakerResponse
    {
        /// <summary>
        /// Gets or sets the Configuration.
        /// </summary>
        public Configuration Configuration { get; set; }
    }
}
