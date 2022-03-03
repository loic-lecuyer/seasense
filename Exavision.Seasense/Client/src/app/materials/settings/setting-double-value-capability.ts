import { CapabilityType } from "../capabilities/capability-type";
import { DoubleValueType } from "../capabilities/double-value-type";
import { SettingCapability } from "./setting-capability";

export interface SettingDoubleValueCapability extends SettingCapability {
  id: string;
  capabilityType: CapabilityType;
  doubleValueType: DoubleValueType;
  minValue: number;
  maxValue: number;
  displayName: string;
  type: string;

}


