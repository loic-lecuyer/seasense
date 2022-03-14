using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Exavision.Seasense.Protocols.Seamos.Tests {
    [TestClass]
    public class SeamosStandartProtocolTest {
        [TestMethod]
        public void TestCommands() {
            SeamosStandardProtocol protocol = new SeamosStandardProtocol();
            this.Check<ICameraFocusMinusContinuousRequest>(protocol, MaterialTarget.ThermalCamera);
            this.Check<ICameraFocusPlusContinuousRequest>(protocol, MaterialTarget.ThermalCamera);
            this.Check<ICameraStopRequest>(protocol, MaterialTarget.ThermalCamera);


        }

        private void Check<T>(SeamosProtocol protocol, MaterialTarget materialTarget) where T : class, ISeamosCommand {
            T val = protocol.Resolve<T>(MaterialTarget.ThermalCamera);
            byte[] data = protocol.Serialize(val);
            ISeamosCommand back = protocol.Deserialize(data);
            Assert.AreEqual(back.GetType(), val.GetType());
            Assert.AreEqual(back.MaterialTarget, val.MaterialTarget);
        }
    }
}
