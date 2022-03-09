import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { TurretAbsolutePositionState } from "../../states/turret/turret-absolute-position-state";
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
  setState(valueState: CapabilityState): void {
  
  }

  move(pan: number, tilt: number) {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    console.log("Call wsService.turretMoveAbsolute " + pan + " " + tilt);
    this.material?.wsService.turretMoveAbsolute(this.material.unit.id, this.material.id, pan, tilt);
  }

}
