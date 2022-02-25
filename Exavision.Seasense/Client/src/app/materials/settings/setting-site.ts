import { SettingCapability } from "./setting-capability";
import { SettingUnit } from "./setting-unit";

export interface SettingSite {
  id: string;
  units: SettingUnit[];
  capabilities: SettingCapability[];
  displayName: string;
  type: string;
}


