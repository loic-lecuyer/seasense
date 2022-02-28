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

export class Unit implements Material {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  materialType: MaterialType;
  wsService: WsService;
  site: Site;
  unit: Unit;
  constructor(settingMaterial: SettingMaterial,site : Site, wsService: WsService) {
    let factory: Factory = new Factory();
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

 


}
