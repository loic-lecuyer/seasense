namespace Exavision.Seasense.Protocols.Spinnaker.Api {
    using Exavision.Seasense.Protocols.Spinnaker.Models;

    /// <summary>
    /// Defines the <see cref="SetConfigurationRequest" />.
    /// </summary>
    public class SetConfigurationRequest : SpinnakerRequest
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SetConfigurationRequest";

        /// <summary>
        /// Gets or sets the Configuration.
        /// </summary>
        public Configuration Configuration { get; set; }
    }
}
