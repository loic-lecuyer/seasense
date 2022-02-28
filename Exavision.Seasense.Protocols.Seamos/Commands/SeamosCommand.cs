namespace Exavision.Seasense.Protocols.Seamos.Commands {
    /// <summary>
    /// Defines the ProtocolType.
    /// </summary>
    public enum ProtocolType
    {
        /// <summary>
        /// Defines the Pelco.
        /// </summary>
        Pelco = 0x01,

        /// <summary>
        /// Defines the Visca.
        /// </summary>
        Visca = 0x02,

        /// <summary>
        /// Defines the Pascal.
        /// </summary>
        Pascal = 0x03,
       // PascalResponse = 0x0c,
        /// <summary>
        /// Defines the Exatrack.
        /// </summary>
        Exatrack2 = 0x4
    }

    /// <summary>
    /// Defines the MaterialTarget.
    /// </summary>
    public enum MaterialTarget
    {
        /// <summary>
        /// Defines the Turret.
        /// </summary>
        Turret = 0,

        /// <summary>
        /// Defines the ThermalCamera.
        /// </summary>
        ThermalCamera = 1,

        /// <summary>
        /// Defines the Telemeter.
        /// </summary>
        Telemeter = 2,

        /// <summary>
        /// Defines the IntertialMeasurement.
        /// </summary>
        IntertialMeasurement = 4
    }

    /// <summary>
    /// Defines the SystemTarget.
    /// </summary>
    public enum SystemTarget
    {
        /// <summary>
        /// Defines the Computer.
        /// </summary>
        Computer = 0xFE,

        /// <summary>
        /// Defines the ElectronicCard.
        /// </summary>
        ElectronicCard = 0x02
    }

    /// <summary>
    /// Defines the <see cref="SeamosCommand" />.
    /// </summary>
    public abstract class SeamosCommand : ISeamosCommand
    {
        /// <summary>
        /// Gets or sets the SystemTarget.
        /// </summary>
        public SystemTarget SystemTarget { get; set; } = SystemTarget.ElectronicCard;

        /// <summary>
        /// Gets the ProtocolType.
        /// </summary>
        public abstract ProtocolType ProtocolType { get; }

        /// <summary>
        /// Gets or sets the MaterialTarget.
        /// </summary>
        public abstract MaterialTarget MaterialTarget { get; set; }

        /// <summary>
        /// Gets or sets the ElectronocCardId.
        /// </summary>
        public int ElectronocCardId { get; set; } = 1;

       
    }
}
