using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Models;
using System.Collections.Generic;

namespace Exavision.Seasense.Server.Materials.Seamos.Capabilities.Turret {
    public class SeamosTurretAbsolutePositionCapability : TurretAbsolutePositionCapability<SettingSeamosTurretAbsolutePositionCapability> {
        private readonly SeamosUnit unit;
        private readonly List<PollingAction> actions = new List<PollingAction>();
        public SeamosTurretAbsolutePositionCapability(SeamosUnit unit) {
            this.unit = unit;

            actions.Add(new PollingAction() {
                Delay = 100,
                Action = () => {
                    ITurretGetPositionExatrack2Absolute cmdAbsolutePosition = this.unit.Protocol.Resolve<ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);
                    cmdAbsolutePosition.CommandTarget = CommandTargetExatrack2.PTU;
                    cmdAbsolutePosition.MoveMode = MoveModeExatrack2.IgnoreData;
                    cmdAbsolutePosition.MaterialTarget = MaterialTarget.Turret;
                    //  cmdAbsolutePosition.StabilizationState = this.GetCapability<ITurretStabilization>().IsStabilizationEnabled ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
                    byte[] commandBytes = this.unit.Protocol.Serialize(cmdAbsolutePosition);
                    string data = commandBytes.ToHexString();
                    this.unit.Client.Send(data);
                }

            });
        }

        public override SettingSeamosTurretAbsolutePositionCapability GetSetting(SettingSeamosTurretAbsolutePositionCapability setting) {
            setting.CapabilityType = Shared.Settings.CapabilityType.TurretAbsolutePosition;
            return setting;
        }

        public override void SetSetting(SettingSeamosTurretAbsolutePositionCapability setting) {
            base.SetSetting(setting);

        }


        public override List<PollingAction> GetPollingActions() {

            return actions;
        }



    }
}
