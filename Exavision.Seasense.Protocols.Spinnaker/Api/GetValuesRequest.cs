namespace Exavision.Seasense.Protocols.Spinnaker.Api {
    /// <summary>
    /// Defines the <see cref="GetValuesRequest" />.
    /// </summary>
    public class GetValuesRequest : SpinnakerRequest
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "GetValuesRequest";
    }
}
