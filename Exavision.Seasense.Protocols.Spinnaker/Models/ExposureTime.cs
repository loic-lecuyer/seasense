namespace Exavision.Seasense.Protocols.Spinnaker.Models {
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System;
    using System.Runtime.Serialization;

    /// <summary>
    /// Defines the ExposureTimeMode.
    /// </summary>
    public enum ExposureTimeMode
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
    /// Defines the <see cref="ExposureTime" />.
    /// </summary>
    public class ExposureTime
    {
        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public ExposureTimeMode Mode { get; set; }

        /// <summary>
        /// Gets or sets the Value.
        /// </summary>
        public Double Value { get; set; }
    }
}
