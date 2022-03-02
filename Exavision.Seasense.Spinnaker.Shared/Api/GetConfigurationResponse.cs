namespace Exavision.Seasense.Spinnaker.Shared.Api {
    using Exavision.Seasense.Spinnaker.Shared.Models;

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
