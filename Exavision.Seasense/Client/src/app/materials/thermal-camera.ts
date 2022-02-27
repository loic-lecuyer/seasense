import { Capability } from "./capabilities/capability";
import { Factory } from "./factory";
import { Material } from "./material";
import { MaterialType } from "./material-type";
import { SettingCapability } from "./settings/setting-capability";
import { SettingMaterial } from "./settings/setting-material";

export class ThermalCamera implements Material {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  materialType: MaterialType;
  constructor(settingMaterial: SettingMaterial) {
    this.id = settingMaterial.id;
    this.materials = [];
    this.materialType = MaterialType.ThermalCamera;
    this.displayName = settingMaterial.displayName;
    let factory: Factory = new Factory();
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

