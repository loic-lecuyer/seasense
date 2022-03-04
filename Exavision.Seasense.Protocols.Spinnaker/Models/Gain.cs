namespace Exavision.Seasense.Protocols.Spinnaker.Models {
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System.Runtime.Serialization;

    /// <summary>
    /// Defines the GainMode.
    /// </summary>
    public enum GainMode
    {
        /// <summary>
        /// Defines the Off.
        /// </summary>
        [EnumMember(Value = "Off")]
        Off,

        /// <summary>
        /// Defines the Continuous.
        /// </summary>
        [EnumMember(Value = "Continuous")]
        Continuous,

        /// <summary>
        /// Defines the Once.
        /// </summary>
        [EnumMember(Value = "Once")]
        Once
    }

    /// <summary>
    /// Defines the <see cref="Gain" />.
    /// </summary>
    public class Gain
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SpinnakerGain";

        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public GainMode Mode { get; set; }

        /// <summary>
        /// Gets or sets the Value.
        /// </summary>
        public double Value { get; set; }
    }
}
