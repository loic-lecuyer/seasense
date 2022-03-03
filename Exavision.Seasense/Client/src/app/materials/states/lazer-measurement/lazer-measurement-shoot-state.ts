import { CapabilityState } from "../capability-state";

export interface LazerMeasurementShootState extends CapabilityState {
  error: string | undefined;
  lastShootDistance: number | undefined;
  lastShootDate: Date | undefined;
  isOn: boolean;
}

