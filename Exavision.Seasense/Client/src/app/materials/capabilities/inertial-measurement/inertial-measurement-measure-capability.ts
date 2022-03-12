import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { Site } from "../../site";
import { CapabilityState } from "../../states/capability-state";
import { InertialMeasurementMeasureState } from "../../states/inertial-measurement/inertial-measurement-measure-state";
import { LazerMeasurementShootState } from "../../states/lazer-measurement/lazer-measurement-shoot-state";
import { Unit } from "../../unit";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";

export class InertialMeasurementMeasureCapability implements Capability {
 
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  angleX: number = 0;
  angleY: number = 0;
  angleZ: number = 0;

  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.InertialMeasurementMeasure;
  }
  setState(valueState: CapabilityState): void {
    let state: InertialMeasurementMeasureState = <InertialMeasurementMeasureState>valueState;
    this.angleX = state.angleX;
    this.angleY = state.angleY;
    this.angleZ = state.angleZ;
   
   
  }

  
}
