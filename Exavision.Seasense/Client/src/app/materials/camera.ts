import { WsService } from "../services/ws.service";
import { Capability } from "./capabilities/capability";
import { CapabilityType } from "./capabilities/capability-type";
import { Factory } from "./factory";
import { Material } from "./material";
import { MaterialType } from "./material-type";
import { SettingCamera } from "./settings/setting-camera";
import { SettingCapability } from "./settings/setting-capability";
import { SettingMaterial } from "./settings/setting-material";
import { Site } from "./site";
import { CapabilityState } from "./states/capability-state";
import { MaterialState } from "./states/material-state";
import { Unit } from "./unit";

export abstract class Camera implements Material  {
  id: string;
  materials: Material[];
  capabilities: Capability[] = [];
  displayName: string;
  materialType: MaterialType;
  wsService: WsService;
  site: Site;
  unit: Unit;
  streamWidth: number;
  streamHeight: number;
  constructor(settingMaterial: SettingMaterial, site: Site, unit: Unit, wsService: WsService, factory: Factory) {
    this.id = settingMaterial.id;
    this.materials = [];
    this.site = site;
    this.unit = unit;
    this.wsService = wsService;
    this.materialType = MaterialType.DayCamera;
    this.displayName = settingMaterial.displayName;

    let settingCamera: SettingCamera = <SettingCamera>settingMaterial;
    this.streamWidth = settingCamera.streamWidth;
    this.streamHeight = settingCamera.streamHeight;
  
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
  setState(state: MaterialState): void {
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
  getCapability<T extends Capability>(capabilityType: CapabilityType): T | undefined {
    let cap: Capability | undefined = this.capabilities.find((value: Capability) => { return value.capabilityType === capabilityType; });
    return <T>cap;

  }
  hasCapability(capabilityType: CapabilityType): boolean {
    let cap: Capability | undefined = this.capabilities.find((value: Capability) => { return value.capabilityType === capabilityType; });
    return cap !== undefined;

  }

  
}

