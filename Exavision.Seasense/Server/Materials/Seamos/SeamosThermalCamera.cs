﻿using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Camera.Thor;
using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using System;
using System.Collections.Generic;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosThermalCamera : ThermalCamera<SettingSeamosThermalCamera, SeamosUnit> {

        public override int ImageWidth { get => 800; }
        public override int ImageHeight { get => 600; }

        public SeamosThermalCamera(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Thermal Camera";
            this.Capabilities.Add(new SeamosCameraThorZoomAbsolutePositionCapability(this));
        }
        public override SettingSeamosThermalCamera GetSetting(SettingSeamosThermalCamera setting) {
            return setting;
        }
        public override void SetSetting(SettingSeamosThermalCamera setting) {
            base.SetSetting(setting);
            Console.WriteLine("SeamosThermalCamera SetSetting");
        }


        public override List<PollingAction> GetPollingActions() {
            List<PollingAction> actions = new List<PollingAction>();
            actions.Add(new PollingAction() {
                Action = () => {
                    ICameraGetValuesRequest request = this.unit.Protocol.Resolve<ICameraGetValuesRequest>(Protocols.Seamos.Commands.MaterialTarget.ThermalCamera);
                    byte[] commandBytes = this.unit.Protocol.Serialize(request);
                    string data = commandBytes.ToHexString();
                    this.unit.Client.Send(data);
                },
                Delay = 100

            });
            return actions;
        }
    }
}
