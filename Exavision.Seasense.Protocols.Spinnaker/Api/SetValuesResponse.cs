namespace Exavision.Seasense.Protocols.Spinnaker.Api {
    /// <summary>
    /// Defines the <see cref="SetValuesResponse" />.
    /// </summary>
    public class SetValuesResponse : SpinnakerResponse
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SetValuesResponse";
    }
}
