import { CapabilityState } from "./capability-state";
import { UnitState } from "./unit-state";

export interface RecordingState {
  $type: string;
  userLogin: string;
  startDate: Date;
  fileName: string;
  id: string;
  materialId: string;
  description: string;
  
}
