namespace Exavision.Seasense.Protocols.Seamos.Commands.InertialMeasurement {
    using System;

    /// <summary>
    /// Defines the <see cref="IIntertialMeasurementGetValuesResponse" />.
    /// </summary>
    public interface IIntertialMeasurementGetValuesResponse : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the AngleX.
        /// </summary>
        Double AngleX { get; set; }

        /// <summary>
        /// Gets or sets the AngleY.
        /// </summary>
        Double AngleY { get; set; }

        /// <summary>
        /// Gets or sets the AngleZ.
        /// </summary>
        Double AngleZ { get; set; }
    }
}
