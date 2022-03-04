namespace Exavision.Seasense.Protocols.Spinnaker.Api {
    using Exavision.Seasense.Protocols.Spinnaker.Models;

    /// <summary>
    /// Defines the <see cref="SetValuesRequest" />.
    /// </summary>
    public class SetValuesRequest : SpinnakerRequest
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SetValuesRequest";

        /// <summary>
        /// Gets or sets the Values.
        /// </summary>
        public Values Values { get; set; }
    }
}
