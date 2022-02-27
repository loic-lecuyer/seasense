import { MatError } from "@angular/material/form-field";
import { Capability } from "./capabilities/capability";
import { Factory } from "./factory";
import { Material } from "./material";
import { MaterialType } from "./material-type";
import { SettingCapability } from "./settings/setting-capability";
import { SettingMaterial } from "./settings/setting-material";


export class Unit implements Material {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  materialType: MaterialType;
  constructor(settingMaterial: SettingMaterial) {
    let factory: Factory = new Factory();
    this.id = settingMaterial.id;
    this.materials = [];
    this.materialType = MaterialType.Unit;
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

  // Pour coder cette methode il faut au mmoins une deuxième capability qui ne soit pas du type recherché
  hasMaterialWithCapability<T extends Capability>(materialType: MaterialType) {  
    let material: Material | undefined = this.getMaterial(materialType);     
    if (material != null) {
      let cap = material.capabilities.find((value: Capability) => {
        let tr = <T>value;
        if (tr != null) {
          console.log("ok");
        }
      });
    }
    return false;
  }
  getMaterial(materialType: MaterialType): Material | undefined {
    return this.materials.find((value: Material) => { return value.materialType == materialType; });
  }
    

 
}

