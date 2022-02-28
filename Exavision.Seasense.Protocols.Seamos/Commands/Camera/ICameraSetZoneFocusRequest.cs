namespace Exavision.Seasense.Protocols.Seamos.Commands.Camera {
    using System;

    /// <summary>
    /// Defines the <see cref="ICameraSetZoneFocusRequest" />.
    /// </summary>
    public interface ICameraSetZoneFocusRequest : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the IsEnabled.
        /// </summary>
        Boolean IsEnabled { get; set; }

        /// <summary>
        /// Gets or sets the X.
        /// </summary>
        double X { get; set; }

        /// <summary>
        /// Gets or sets the Y.
        /// </summary>
        double Y { get; set; }

        /// <summary>
        /// Gets or sets the Width.
        /// </summary>
        double Width { get; set; }

        /// <summary>
        /// Gets or sets the Height.
        /// </summary>
        double Height { get; set; }
    }
}
