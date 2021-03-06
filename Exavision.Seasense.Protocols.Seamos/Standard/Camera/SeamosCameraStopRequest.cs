using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;

namespace Exavision.Seasense.Protocols.Seamos.Standard.Camera {
    public class SeamosCameraStopRequest : SeamosPelcoCommand, ICameraStopRequest
    {
        /// <summary>
        /// Gets the CommandByte1.
        /// </summary>
        public override byte CommandByte1 => 0x00;

        /// <summary>
        /// Gets the CommandByte2.
        /// </summary>
        public override byte CommandByte2 => 0x00;
    }
}
