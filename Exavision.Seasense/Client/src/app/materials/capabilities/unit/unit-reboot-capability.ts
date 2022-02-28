import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class UnitRebootCapability implements Capability {
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.UnitReboot;
  }
  setState(valueState: CapabilityState): void {

  }
}
