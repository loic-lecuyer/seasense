import { Capability } from "./capabilities/capability";
import { Factory } from "./factory";
import { Material } from "./material";
import { SettingCapability } from "./settings/setting-capability";
import { SettingMaterial } from "./settings/setting-material";


export class Unit implements Material {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  constructor(settingMaterial: SettingMaterial) {
    let factory: Factory = new Factory();
    this.id = settingMaterial.id;
    this.materials = [];
    this.displayName = settingMaterial.displayName;
    settingMaterial.materials.forEach((settingMaterialChild: SettingMaterial) => {
      let material: Material = factory.createMaterial(settingMaterialChild);
      this.materials.push(material);
    });
    settingMaterial.capabilities.forEach((settingCapability: SettingCapability) => {
      let capability: Capability = factory.createCapability(settingCapability);
      this.capabilities.push(capability);
    });
  }
    

 
}

