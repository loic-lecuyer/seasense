import { SwitchValue } from "../../models/switch-value";
import { Material } from "../material";
import { SettingCapability } from "../settings/setting-capability";
import { SettingDoubleValueCapability } from "../settings/setting-double-value-capability";
import { SettingSwitchValueCapability } from "../settings/setting-switch-value-capability";

import { CapabilityState } from "../states/capability-state";
import { DoubleValueState } from "../states/double-value-state";
import { SwitchValueState } from "../states/switch-value-state";
import { Capability } from "./capability";
import { CapabilityType } from "./capability-type";
import { DoubleValueType } from "./double-value-type";
import { SwitchValueType } from "./switch-value-type";



export class SwitchValueCapability implements Capability {
  id: string;
  values: SwitchValue[];
  value: SwitchValue;
  _editValue: SwitchValue;
  capabilityType: CapabilityType;
  switchValueType: SwitchValueType;
  material: Material | undefined;
  constructor(settingCapability: SettingSwitchValueCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.SwitchValue;
    this.switchValueType = settingCapability.switchValueType;
    this.values = settingCapability.values;
    this.value = this.values[0];
    this._editValue = this.values[0];
   
  
  }
  get editValue(): SwitchValue {
    return this._editValue;
  }
  set editValue(val: SwitchValue) {
    this._editValue = val;
    this.material?.wsService.switchValueSet(this.material.unit.id, this.material.id, this.id, this._editValue);
  }
  beginEdit() {
    this._editValue = this.value;
  }
  setState(valueState: CapabilityState): void {
    let state: SwitchValueState = <SwitchValueState>valueState;
    let value: SwitchValue | undefined = this.values.find((val: SwitchValue) => {
      return val.value != null && state.value != null && state.value.value != null &&  val.value === state.value.value;
    });    
    if (value != null) {
      this.value = value;
    }
    else {
      console.log("null value for set state of capability " + this.capabilityType + " " + this.switchValueType);
    }
 
  }
}
