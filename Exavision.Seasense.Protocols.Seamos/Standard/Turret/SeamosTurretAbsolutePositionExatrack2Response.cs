namespace Exavision.Seasense.Protocols.Seamos.Standard.Turret {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Turret;

    /// <summary>
    /// Defines the <see cref="SeamosTurretAbsolutePositionResponse" />.
    /// </summary>
    public class SeamosTurretAbsolutePositionExatrack2Response : SeamosExatrack2Command, ITurretGetPositionExatrack2Absolute
    {
        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public override MaterialTarget MaterialTarget { get; set; } = MaterialTarget.Turret;

        /// <summary>        /// Gets the SyncByte.
        /// </summary>

        public override byte SyncByte => 0xf9;
    }
}
