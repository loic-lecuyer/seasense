import { CapabilityState } from "./capability-state";
import { UnitState } from "./unit-state";

export interface SiteState {
  $type: string;
  id: string;
  units: UnitState[];
  capabilities: CapabilityState[];
}
