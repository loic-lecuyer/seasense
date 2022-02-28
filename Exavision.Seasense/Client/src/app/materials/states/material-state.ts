import { CapabilityState } from "./capability-state";

export interface MaterialState {
  $type: string;
  id: string;
  materials: MaterialState[];
  capabilities: CapabilityState[];
}
