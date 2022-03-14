import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class CameraFocusContinuousCapability implements Capability {
 
  
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;


  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.CameraFocusContinuous;
  }

  focusOutStart() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.cameraFocusOutStart(this.material.unit.id, this.material.id);


  }
  focusStop() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.cameraFocusStop(this.material.unit.id, this.material.id);
  }
 focusInStart() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
   this.material?.wsService.cameraFocusInStart(this.material.unit.id, this.material.id);
  }

  setState(valueState: CapabilityState): void {

  }
}
