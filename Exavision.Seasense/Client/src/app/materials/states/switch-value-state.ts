import { SwitchValue } from "../../models/switch-value";
import { CapabilityState } from "./capability-state";
import { UnitState } from "./unit-state";

export interface SwitchValueState extends CapabilityState {
  value: SwitchValue;
}
