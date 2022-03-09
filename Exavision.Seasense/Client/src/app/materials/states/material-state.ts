import { CapabilityState } from "./capability-state";
import { StatusState } from "./status-state";

export interface MaterialState {
  $type: string;
  id: string;
  materials: MaterialState[];
  capabilities: CapabilityState[];
  status: StatusState[];
}
