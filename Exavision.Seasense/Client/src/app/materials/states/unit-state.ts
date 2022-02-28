import { CapabilityState } from "./capability-state";
import { MaterialState } from "./material-state";

export interface UnitState {
  $type: string;
  id: string;  
  materials: MaterialState[];
  capabilities: CapabilityState[];
}
