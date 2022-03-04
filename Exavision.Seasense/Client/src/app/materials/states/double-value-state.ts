import { CapabilityState } from "./capability-state";
import { UnitState } from "./unit-state";

export interface DoubleValueState extends CapabilityState {
  value: number;
}
