namespace Exavision.Seasense.Protocols.Spinnaker.Models {
    /// <summary>
    /// Defines the <see cref="Values" />.
    /// </summary>
    public class Values {
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

        public Values() {

            BlackLevel = new BlackLevel() { Value = 10 };
            ExposureTime = new ExposureTime() { Mode = ExposureTimeMode.Off, Value = 0 };
            Fps = 25;
            Gain = new Gain() { Mode = GainMode.Off, Value = 5, Type = "GainMode" };
            Gamma = new Gamma();
            Quality = new Quality();
            Type = "Values";
            Version = new Exavision.Seasense.Protocols.Spinnaker.Models.Version();
            WhiteBalance = new WhiteBalance();
            Zoom = new Zoom() { Value = 1 };

        }
    }
}
