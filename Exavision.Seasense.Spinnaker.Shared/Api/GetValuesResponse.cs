namespace Exavision.Seasense.Spinnaker.Shared.Api {
    using Exavision.Seasense.Spinnaker.Shared.Models;

    /// <summary>
    /// Defines the <see cref="GetValuesResponse" />.
    /// </summary>
    public class GetValuesResponse : SpinnakerResponse
    {
        /// <summary>
        /// Gets or sets the Values.
        /// </summary>
        public Values Values { get; set; }

        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "GetValuesResponse";
    }
}
