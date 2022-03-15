using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace Exavision.Seasense.Protocols.Seamos.Tests {
    [TestClass]
    public class SeamosStandartProtocolTest {
        [TestMethod]
        public void TestCommands() {
            SeamosStandardProtocol protocol = new SeamosStandardProtocol();
            this.Checks(protocol, MaterialTarget.ThermalCamera);
            this.Checks(protocol, MaterialTarget.Telemeter);
            this.Checks(protocol, MaterialTarget.IntertialMeasurement);
     
        }

        private void Checks(SeamosStandardProtocol protocol, MaterialTarget materialTarget) {
            List<ISeamosCommand> commands = protocol.ResolveAll(materialTarget);
            foreach (ISeamosCommand command in commands) {
                System.Diagnostics.Debug.WriteLine("Test command " + command.GetType().Name);
                byte[] data = protocol.Serialize(command);
                ISeamosCommand back = protocol.Deserialize(data);
                Assert.AreEqual(back.GetType(), command.GetType());
                Assert.AreEqual(back.MaterialTarget, command.MaterialTarget);
                Assert.AreEqual(back.MaterialTarget, materialTarget);
                Assert.AreEqual(back.SystemTarget, command.SystemTarget);
                Assert.AreEqual(back.ElectronocCardId, command.ElectronocCardId);
                Assert.AreEqual(back.ProtocolType, command.ProtocolType);
                byte[] dataBack = protocol.Serialize(back);
                Assert.AreEqual(dataBack.Length, data.Length);
                for (int i = 0; i < data.Length; i++) {
                    Assert.AreEqual(dataBack[i], data[i]);
                }

            }
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
