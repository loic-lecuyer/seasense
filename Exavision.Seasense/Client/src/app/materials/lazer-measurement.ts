import { WsService } from "../services/ws.service";
import { Capability } from "./capabilities/capability";
import { CapabilityType } from "./capabilities/capability-type";
import { Factory } from "./factory";
import { Material } from "./material";
import { MaterialType } from "./material-type";
import { SettingCapability } from "./settings/setting-capability";
import { SettingMaterial } from "./settings/setting-material";
import { Site } from "./site";
import { CapabilityState } from "./states/capability-state";
import { MaterialState } from "./states/material-state";
import { StatusState } from "./states/status-state";
import { Unit } from "./unit";

export class LazerMeasurement implements Material {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  status: StatusState[] = [];
  materialType: MaterialType;
  wsService: WsService;
  site: Site;
  unit: Unit;
  constructor(settingMaterial: SettingMaterial, site: Site, unit: Unit, wsService: WsService, factory: Factory) {
    this.id = settingMaterial.id;
    this.materials = [];
    this.wsService = wsService;
    this.site = site;
    this.unit = unit;
    this.materialType = MaterialType.LazerMeasurement;
    this.displayName = settingMaterial.displayName;   
    settingMaterial.materials.forEach((settingMaterialChild: SettingMaterial) => {
      let material: Material = factory.createMaterial(settingMaterialChild, site, unit, this.wsService);
      this.materials.push(material);
    });
    settingMaterial.capabilities.forEach((settingCapability: SettingCapability) => {
      let capability: Capability = factory.createCapability(settingCapability);
      capability.material = this;
      this.capabilities.push(capability);
    });
  }
  getCapability<T extends Capability>(capabilityType: CapabilityType): T | undefined {
    let cap: Capability | undefined = this.capabilities.find((value: Capability) => { return value.capabilityType === capabilityType; });
    return <T>cap;

  }
  setState(state: MaterialState): void {
    this.status = state.status;
    state.capabilities.forEach((valueState: CapabilityState) => {
      let cap: Capability | undefined = this.capabilities.find((valueCap: Capability) => { return valueCap.id === valueState.id; });
      if (cap != null) {
        cap.setState(valueState);
      }
    });
    state.materials.forEach((valueState: MaterialState) => {
      let mat: Material | undefined = this.materials.find((valueMat: Material) => { return valueMat.id === valueState.id; });
      if (mat != null) {
        mat.setState(valueState);
      }
    });
  }
  hasCapability(capabilityType: CapabilityType): boolean {
    let cap: Capability | undefined = this.capabilities.find((value: Capability) => { return value.capabilityType === capabilityType; });
    return cap !== undefined;

  }
  
}

