using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.InertialMeasurement;
using Exavision.Seasense.Shared.Capabilities.InertialMeasurement;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.States;
using Exavision.Seasense.Shared.States.InertialMeasurement;
using System;
using System.Collections.Generic;
using System.Text;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.InertialMeasurement {
    public class SeamosInertialMeasurementMeasureCapability : InertialMeasurementMeasureCapability, ISeamosCapability {
        private readonly List<PollingAction> pollingActions = new List<PollingAction>();
        public SeamosInertialMeasurementMeasureCapability(SeamosClient client) {
            IIntertialMeasurementGetValuesRequest request = client.Protocol.Resolve<IIntertialMeasurementGetValuesRequest>(MaterialTarget.IntertialMeasurement);
            pollingActions.Add(new PollingAction() {
                Action = () => {
                    client.Send(request);
                },
                Delay=250
            });
        }
        public void ProcessHardwareResponse(ISeamosCommand command) {
            if (command is IIntertialMeasurementGetValuesResponse response) {
                this.AngleX = response.AngleX;
                this.AngleY = response.AngleY;
                this.AngleZ = response.AngleZ;
            }
        }
        public override List<PollingAction> GetPollingActions() {
            return pollingActions;
        }

        public override CapabilityState GetState() {
            InertialMeasurementMeasureState state = new InertialMeasurementMeasureState();
            state.Id = this.Id;
            state.AngleX = this.AngleX;
            state.AngleY = this.AngleY;
            state.AngleZ = this.AngleZ;           
            return state;
        }
    }
}
