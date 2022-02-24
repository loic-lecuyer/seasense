import { SettingCapability } from "../../settings/setting-capability";
import { Capability } from "../capability";

export class UnitRebootCapability implements Capability {
  id: string;
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
  }

}
