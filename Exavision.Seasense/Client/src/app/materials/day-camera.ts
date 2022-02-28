import { WsService } from "../services/ws.service";
import { Capability } from "./capabilities/capability";
import { Factory } from "./factory";
import { Material } from "./material";
import { MaterialType } from "./material-type";
import { SettingCapability } from "./settings/setting-capability";
import { SettingMaterial } from "./settings/setting-material";
import { Site } from "./site";
import { Unit } from "./unit";

export class DayCamera implements Material  {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  materialType: MaterialType;
  wsService: WsService;
  site: Site;
  unit: Unit;
  constructor(settingMaterial: SettingMaterial, site: Site, unit: Unit,wsService: WsService) {
    this.id = settingMaterial.id;
    this.materials = [];
    this.site = site;
    this.unit = unit;
    this.wsService = wsService;
    this.materialType = MaterialType.DayCamera;
    this.displayName = settingMaterial.displayName;
    let factory: Factory = new Factory();
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
  

  
}

