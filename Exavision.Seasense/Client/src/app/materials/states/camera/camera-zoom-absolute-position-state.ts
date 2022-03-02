import { CapabilityState } from "../capability-state";

export interface CameraZoomAbsolutePositionStep extends CapabilityState {
  horizontalFieldOfView: number;
  zoomMultiplier: number;
}

