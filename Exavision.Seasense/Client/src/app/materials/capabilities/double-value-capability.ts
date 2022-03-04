import { Material } from "../material";
import { SettingCapability } from "../settings/setting-capability";
import { SettingDoubleValueCapability } from "../settings/setting-double-value-capability";

import { CapabilityState } from "../states/capability-state";
import { DoubleValueState } from "../states/double-value-state";
import { Capability } from "./capability";
import { CapabilityType } from "./capability-type";
import { DoubleValueType } from "./double-value-type";



export class DoubleValueCapability implements Capability {
  id: string;
  minValue: number = 0;
  maxValue: number = 0;
  value: number = 0;
  _editValue: number = 0;
  capabilityType: CapabilityType;
  doubleValueType: DoubleValueType;
  material: Material | undefined;
  constructor(settingCapability: SettingDoubleValueCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.DoubleValue;
    this.doubleValueType = settingCapability.doubleValueType;
    this.value = 0;
    this.minValue = settingCapability.minValue;
    this.maxValue = settingCapability.maxValue;
  }
  get editValue() : number {
    return this._editValue;
  }
  set editValue(val : number) {
    this._editValue = val;
    this.material?.wsService.doubleValueSet(this.material.unit.id, this.material.id, this.id, this._editValue);
  }
  beginEdit() {
    this._editValue = this.value;
  }
  setState(valueState: CapabilityState): void {
    let state: DoubleValueState = <DoubleValueState>valueState;
    this.value = state.value;
  }
}
