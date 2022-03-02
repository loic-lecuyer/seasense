namespace Exavision.Seasense.Spinnaker.Shared.Models {
    using System;

    /// <summary>
    /// Defines the <see cref="Configuration" />.
    /// </summary>
    public class Configuration
    {
        /// <summary>
        /// Gets or sets the Type.
        /// </summary>
        public string Type { get; set; } = "SpinnakerConfiguration";

        /// <summary>
        /// Gets or sets the ZoomIncrement.
        /// </summary>
        public Nullable<double> ZoomIncrement { get; set; }

        /// <summary>
        /// Gets or sets the Pitch.
        /// </summary>
        public Nullable<double> Pitch { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera1SerialNumber.
        /// </summary>
        public string DayCamera1SerialNumber { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera2SerialNumber.
        /// </summary>
        public string DayCamera2SerialNumber { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera3SerialNumber.
        /// </summary>
        public string DayCamera3SerialNumber { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera1Focale.
        /// </summary>
        public Nullable<double> DayCamera1Focale { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera2Focale.
        /// </summary>
        public Nullable<double> DayCamera2Focale { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera3Focale.
        /// </summary>
        public Nullable<double> DayCamera3Focale { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera1OffsetX.
        /// </summary>
        public Nullable<double> DayCamera1OffsetX { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera2OffsetX.
        /// </summary>
        public Nullable<double> DayCamera2OffsetX { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera3OffsetX.
        /// </summary>
        public Nullable<double> DayCamera3OffsetX { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera1OffsetY.
        /// </summary>
        public Nullable<double> DayCamera1OffsetY { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera2OffsetY.
        /// </summary>
        public Nullable<double> DayCamera2OffsetY { get; set; }

        /// <summary>
        /// Gets or sets the DayCamera3OffsetY.
        /// </summary>
        public Nullable<double> DayCamera3OffsetY { get; set; }
    }
}
