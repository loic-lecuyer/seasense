namespace Exavision.Seasense.Spinnaker.Shared.Models {
    /// <summary>
    /// Defines the <see cref="Values" />.
    /// </summary>
    public class Values
    {
        /// <summary>
        /// Gets or sets the Fps.
        /// </summary>
        public double Fps { get; set; }

        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SpinnakerValues";

        /// <summary>
        /// Gets or sets the Gamma.
        /// </summary>
        public Gamma Gamma { get; set; }

        /// <summary>
        /// Gets or sets the Zoom.
        /// </summary>
        public Zoom Zoom { get; set; }

        /// <summary>
        /// Gets or sets the Gain.
        /// </summary>
        public Gain Gain { get; set; }

        /// <summary>
        /// Gets or sets the BlackLevel.
        /// </summary>
        public BlackLevel BlackLevel { get; set; }

        /// <summary>
        /// Gets or sets the ExposureTime.
        /// </summary>
        public ExposureTime ExposureTime { get; set; }

        /// <summary>
        /// Gets or sets the WhiteBalance.
        /// </summary>
        public WhiteBalance WhiteBalance { get; set; }

        /// <summary>
        /// Gets or sets the Quality.
        /// </summary>
        public Quality Quality { get; set; }

        /// <summary>
        /// Gets or sets the Version.
        /// </summary>
        public Version Version { get; set; }
    }
}
