import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class TurretMoveAbsoluteCapability implements Capability {
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.TurretMoveAbsolute;
  }

}
