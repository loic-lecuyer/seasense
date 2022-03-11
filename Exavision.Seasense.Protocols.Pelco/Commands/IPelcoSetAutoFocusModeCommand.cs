namespace Exavision.Seasense.Protocols.Pelco.Commands {
    /// <summary>
    /// Defines the AutoFocusMode.
    /// </summary>
    public enum AutoFocusMode
    {
        /// <summary>
        /// Defines the Auto.
        /// </summary>
        Auto = 0x00,
        /// <summary>
        /// Defines the OnePush.
        /// </summary>
        OnePush = 0x01,
        /// <summary>
        /// Defines the Off.
        /// </summary>
        Off = 0x02
    }

    /// <summary>
    /// Defines the <see cref="IPelcoSetAutoFocusModeCommand" />.
    /// </summary>
    public interface IPelcoSetAutoFocusModeCommand : IPelcoCommand
    {
        /// <summary>
        /// Gets or sets the Mode.
        /// </summary>
        AutoFocusMode Mode { get; set; }
    }
}
