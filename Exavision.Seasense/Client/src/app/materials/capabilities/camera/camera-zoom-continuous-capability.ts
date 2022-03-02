import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class CameraZoomContinuousCapability implements Capability {
 
  
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;


  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.CameraZoomContinuous;
  }

  zoomOutStart() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.cameraZoomOutStart(this.material.unit.id, this.material.id);


  }
  zoomStop() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.cameraZoomStop(this.material.unit.id, this.material.id);
  }
  zoomInStart() {
    if (this.material == null) return;
    if (this.material.unit == null) return;
    this.material?.wsService.cameraZoomInStart(this.material.unit.id, this.material.id);
  }

  setState(valueState: CapabilityState): void {

  }
}
