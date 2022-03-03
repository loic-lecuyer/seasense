import { Material } from "../../material";
import { SettingCapability } from "../../settings/setting-capability";
import { CapabilityState } from "../../states/capability-state";
import { TurretGyrostabilizationState } from "../../states/turret/turret-gyrostabilization-state";
import { Capability } from "../capability";
import { CapabilityType } from "../capability-type";
export class TurretGyrostabilizationCapability implements Capability {
 
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  isGyrostabilizationEnabled: boolean = false;
 
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
    this.capabilityType = CapabilityType.TurretGyrostabilization;
  }
  setState(valueState: CapabilityState): void {
    let state: TurretGyrostabilizationState = <TurretGyrostabilizationState>valueState;
    this.isGyrostabilizationEnabled = state.isEnabled;
  }

  setGyrostabilization(enabled: boolean) {
    if (this.material == null) return;
    if (this.material.unit == null) return;
   
    this.material?.wsService.turretGyrostabilization(this.material.unit.id, this.material.id, enabled);
  }

}
