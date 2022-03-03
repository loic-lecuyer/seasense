import { Material } from "../material";
import { SettingCapability } from "../settings/setting-capability";
import { SettingDoubleValueCapability } from "../settings/setting-double-value-capability";

import { CapabilityState } from "../states/capability-state";
import { Capability } from "./capability";
import { CapabilityType } from "./capability-type";
import { DoubleValueType } from "./double-value-type";



export class DoubleValueCapability implements Capability {
  id: string;
  minValue: number = 0;
  maxValue: number = 0;
  value: number = 0;
  capabilityType: CapabilityType;
  doubleValueType: DoubleValueType;
  material: Material | undefined;
  constructor(settingCapability: SettingDoubleValueCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.DoubleValue;
    this.doubleValueType = settingCapability.doubleValueType;
    this.minValue = settingCapability.minValue;
    this.maxValue = settingCapability.maxValue;
  }
  setState(valueState: CapabilityState): void {

  }
}
