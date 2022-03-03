import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { LazerMeasurementShootState } from "../../states/lazer-measurement/lazer-measurement-shoot-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class LazerMeasurementShootCapability implements Capability {
 
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  error: string | undefined;
  lastShootDistance: number | undefined;
  lastShootDate: Date | undefined;
  isOn: boolean = false;

  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.LazerMeasurementShootCapability;
  }
  setState(valueState: CapabilityState): void {
    let state: LazerMeasurementShootState = <LazerMeasurementShootState>valueState;
    this.isOn = state.isOn;
    this.error = state.error;
    this.lastShootDistance = state.lastShootDistance;
    if (state.lastShootDate == null) {
      this.lastShootDate = undefined;
    } else {
      this.lastShootDate = new Date(state.lastShootDate?.toString());
    }
   
  }

  shootMeasure() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.lazerMeasurementShoot(this.material.unit.id, this.material.id);
  }
}
