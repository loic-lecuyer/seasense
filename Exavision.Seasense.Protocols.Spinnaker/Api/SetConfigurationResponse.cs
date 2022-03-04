namespace Exavision.Seasense.Protocols.Spinnaker.Api {
    /// <summary>
    /// Defines the <see cref="SetConfigurationResponse" />.
    /// </summary>
    public class SetConfigurationResponse : SpinnakerResponse
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SetConfigurationResponse";

        /// <summary>
        /// Gets or sets a value indicating whether Success.
        /// </summary>
        public bool Success { get; set; }
    }
}
