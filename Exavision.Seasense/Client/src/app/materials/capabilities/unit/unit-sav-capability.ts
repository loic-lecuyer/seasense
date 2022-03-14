import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class UnitSavCapability implements Capability {
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.UnitSav;
  }
  setState(valueState: CapabilityState): void {

  }
  getLatestComMessage() {
    this.material?.unit.wsService.getLastComMessage(this.material?.unit.id);
  }
  executeCommand(command: string) {
    this.material?.unit.wsService.executeCommand(this.material?.unit.id,command);
  }
  setPollingState(isPollingEnabled: boolean) {
    this.material?.unit.wsService.setPollingState(this.material?.unit.id,isPollingEnabled);
  }
}
