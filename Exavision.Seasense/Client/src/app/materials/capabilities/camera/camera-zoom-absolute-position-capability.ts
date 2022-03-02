import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CameraZoomAbsolutePositionStep } from "../../states/camera/camera-zoom-absolute-position-state";
import { CapabilityState } from "../../states/capability-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class CameraZoomAbsolutePositionCapability implements Capability {
 
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  zoomMultiplier: number = 1;
  horizontalFieldOfView: number = 25;


  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.CameraZoomAbsolutePosition;
  }

 
  setState(valueState: CapabilityState): void {
    let state: CameraZoomAbsolutePositionStep = <CameraZoomAbsolutePositionStep>valueState;
    this.zoomMultiplier = state.zoomMultiplier;
    this.horizontalFieldOfView = state.horizontalFieldOfView;
  }
}
