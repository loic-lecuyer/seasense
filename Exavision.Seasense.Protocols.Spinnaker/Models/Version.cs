namespace Exavision.Seasense.Protocols.Spinnaker.Models {
    /// <summary>
    /// Defines the <see cref="Version" />.
    /// </summary>
    public class Version
    {
        /// <summary>
        /// Gets or sets the SoftwareVersion.
        /// </summary>
        public string SoftwareVersion { get; set; }

        /// <summary>
        /// Gets or sets the HardwareVersions.
        /// </summary>
        public string HardwareVersions { get; set; }

        /// <summary>
        /// Gets or sets the HardwareSerials.
        /// </summary>
        public string HardwareSerials { get; set; }
    }
}
