import { SwitchValue } from "../../models/switch-value";
import { CapabilityType } from "../capabilities/capability-type";
import { DoubleValueType } from "../capabilities/double-value-type";
import { SwitchValueType } from "../capabilities/switch-value-type";
import { SettingCapability } from "./setting-capability";

export interface SettingSwitchValueCapability extends SettingCapability {
  id: string;
  capabilityType: CapabilityType;
  switchValueType: SwitchValueType;
  values: SwitchValue[]; 
  displayName: string;
  type: string;

}


