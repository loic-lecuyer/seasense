namespace Exavision.Seasense.Protocols.Pelco.Commands {
    using Exavision.Seasense.Core.Types;

    /// <summary>
    /// Defines the <see cref="IPelcoSetTiltPositionCommand" />.
    /// </summary>
    public interface IPelcoSetTiltPositionCommand : IPelcoCommand {
        /// <summary>
        /// The SetTiltPosition.
        /// </summary>
        /// <param name="angle">The angle<see cref="Angle"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        IPelcoCommand SetTiltPosition(Angle angle);
    }
}
