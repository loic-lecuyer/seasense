namespace Exavision.Seasense.Protocols.Pelco.Commands {
    using Exavision.Seasense.Core.Types;

    /// <summary>
    /// Defines the <see cref="IPelcoSetPanPositionCommand" />.
    /// </summary>
    public interface IPelcoSetPanPositionCommand : IPelcoCommand {
        /// <summary>
        /// The SetPanPosition.
        /// </summary>
        /// <param name="angle">The angle<see cref="Angle"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        IPelcoCommand SetPanPosition(Angle angle);
    }
}
