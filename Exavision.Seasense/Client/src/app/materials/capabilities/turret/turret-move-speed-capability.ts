import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class TurretMoveSpeedCapability implements Capability {
 
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;


  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.TurretMoveSpeed;
  }

  moveSpeed(axisX: number, axisY: number) {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.turretMoveSpeed(this.material.unit.id, this.material.id, axisX, axisY);
    
  }
  setState(valueState: CapabilityState): void {

  }
}
