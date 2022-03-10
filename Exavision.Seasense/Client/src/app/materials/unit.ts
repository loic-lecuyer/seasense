import { MatError } from "@angular/material/form-field";
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
import { UnitState } from "./states/unit-state";
import { StatusState } from "./states/status-state";
export class Unit implements Material {
  
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  status: StatusState[] = [];
  displayName: string;
  materialType: MaterialType;
  wsService: WsService;
  site: Site;
  unit: Unit;
  constructor(settingMaterial: SettingMaterial, site: Site, wsService: WsService, factory: Factory ) {
 
    this.unit = this;
    this.site = site;
    this.id = settingMaterial.id;
    this.materials = [];
    this.wsService = wsService;
    this.materialType = MaterialType.Unit;

   
    this.displayName = settingMaterial.displayName;
    settingMaterial.materials.forEach((settingMaterialChild: SettingMaterial) => {
      let material: Material = factory.createMaterial(settingMaterialChild, site,this, this.wsService);

      this.materials.push(material);
    });
 
    settingMaterial.capabilities.forEach((settingCapability: SettingCapability) => {
      let capability: Capability = factory.createCapability(settingCapability);
      capability.material = this;   
      this.capabilities.push(capability);
    });
  }

  hasCapability(capabilityType: CapabilityType): boolean {
    let cap: Capability | undefined = this.capabilities.find((value: Capability) => { return value.capabilityType === capabilityType; });
    return cap !== undefined;

  }
  getCapability<T extends Capability>(capabilityType: CapabilityType): T | undefined {
    let cap: Capability | undefined = this.capabilities.find((value: Capability) => { return value.capabilityType === capabilityType; });
    return <T>cap;

  }
  // Pour coder cette methode il faut au mmoins une deuxième capability qui ne soit pas du type recherché
  hasMaterialWithCapability( materialType: MaterialType,capabilityType: CapabilityType) {
  
    let material: Material | undefined = this.getMaterial(materialType);
    if (material != null) {
      let cap = material.capabilities.find((value: Capability) => {
        return (value.capabilityType == capabilityType);
      });
      if (cap != null) return true;
    }
    return false;
  }

  getMaterialCapability<T extends Capability>(materialType: MaterialType, capabilityType: CapabilityType): T | undefined {
    let material: Material | undefined = this.getMaterial(materialType);
    if (material != null) {
      let cap = material.capabilities.find((value: Capability) => {
        return (value.capabilityType == capabilityType);
      });

      if (cap != null) {
        let result: T = <T>cap;
        return result;
      }
        
      
    }
    return undefined;
  }
 
  getMaterial(materialType: MaterialType): Material | undefined {
    return this.materials.find((value: Material) => { return value.materialType == materialType; });
  }

 
  setState(unitState: UnitState) {
    this.status = unitState.status;
    unitState.capabilities.forEach((valueState: CapabilityState) => {
      let cap: Capability | undefined = this.capabilities.find((valueCap: Capability) => { return valueCap.id === valueState.id; });
      if (cap != null) {
        cap.setState(valueState);
      }
    });
    unitState.materials.forEach((valueState: MaterialState) => {
      let mat: Material | undefined = this.materials.find((valueMat: Material) => { return valueMat.id === valueState.id; });
      if (mat != null) {
        mat.setState(valueState);
      }
    });
  
  }

}
