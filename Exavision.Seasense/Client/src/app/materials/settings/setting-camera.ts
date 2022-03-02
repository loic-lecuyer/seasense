import { MaterialType } from "../material-type";
import { SettingCapability } from "./setting-capability";
import { SettingMaterial } from "./setting-material";


export interface SettingCamera extends SettingMaterial {
  streamUrl: string;
  streamWidth: number;
  streamHeight: number;
}


