import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { TurretAbsolutePositionState } from "../../states/turret/turret-absolute-position-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class TurretAbsolutePositionCapability implements Capability {
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  pan: number = 0;
  tilt: number = 0;
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.TurretAbsolutePosition;
  }
  setState(valueState: CapabilityState): void {
    if (valueState.$type === 'TurretAbsolutePositionState') {
      let turretAbsolutePositionState: TurretAbsolutePositionState = <TurretAbsolutePositionState>valueState;
      this.pan = turretAbsolutePositionState.pan;
      this.tilt = turretAbsolutePositionState.tilt;     
    }
  }

}
