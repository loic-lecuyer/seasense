import { CapabilityState } from "../capability-state";

export interface TurretAbsolutePositionState extends CapabilityState {
  pan: number;
  tilt: number;
}

