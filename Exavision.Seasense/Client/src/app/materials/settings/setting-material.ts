import { MaterialType } from "../material-type";
import { SettingCapability } from "./setting-capability";


export interface SettingMaterial {
  id: string;  
  materialType: MaterialType;
  materials: SettingMaterial[];
  capabilities: SettingCapability[];
  type: string;
  displayName: string;
}


