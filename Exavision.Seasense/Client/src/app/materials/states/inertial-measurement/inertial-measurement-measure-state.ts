import { CapabilityState } from "../capability-state";

export interface InertialMeasurementMeasureState extends CapabilityState {
  angleX: number;
  angleY: number;
  angleZ: number;
}

