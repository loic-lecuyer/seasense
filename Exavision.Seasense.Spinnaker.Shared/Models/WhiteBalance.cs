namespace Exavision.Seasense.Spinnaker.Shared.Models {
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System.Runtime.Serialization;

    /// <summary>
    /// Defines the WhiteBalanceMode.
    /// </summary>
    public enum WhiteBalanceMode
    {
        /// <summary>
        /// Defines the Auto.
        /// </summary>
        [EnumMember(Value = "Auto")]
        Auto,

        /// <summary>
        /// Defines the Red.
        /// </summary>
        [EnumMember(Value = "Red")]
        Red,

        /// <summary>
        /// Defines the Blue.
        /// </summary>
        [EnumMember(Value = "Blue")]
        Blue,

    }

    /// <summary>
    /// Defines the <see cref="WhiteBalance" />.
    /// </summary>
    public class WhiteBalance
    {
        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public WhiteBalanceMode Mode { get; set; }

        /// <summary>
        /// Gets or sets the Value.
        /// </summary>
        public double Value { get; set; }
    }
}
