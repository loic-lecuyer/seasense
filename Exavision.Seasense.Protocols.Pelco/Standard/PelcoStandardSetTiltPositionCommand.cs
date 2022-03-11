namespace Exavision.Seasense.Protocols.Pelco.Standard {
    using Exavision.Seasense.Core.Types;
    using Exavision.Seasense.Protocols.Pelco.Commands;

    /// <summary>
    /// Defines the <see cref="PelcoStandardSetTiltPositionCommand" />.
    /// </summary>
    public class PelcoStandardSetTiltPositionCommand : PelcoCommand, IPelcoSetTiltPositionCommand {
        /// <summary>
        /// Gets or sets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 { get; set; } = 0x00;

        /// <summary>
        /// Gets or sets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 { get; set; } = 0x4D;

        /// <summary>
        /// The SetTiltPosition.
        /// </summary>
        /// <param name="angle">The angle<see cref="Angle"/>.</param>
        /// <returns>The <see cref="IPelcoCommand"/>.</returns>
        public IPelcoCommand SetTiltPosition(Angle angle) {
            int pelcoAngle = (int)(angle.Degree * 100D);
            pelcoAngle = (pelcoAngle + 36000) % 36000;
            pelcoAngle = ((36000 - pelcoAngle) % 36000);
            this.SetIntValue(pelcoAngle);
            return this;
        }
    }
}
