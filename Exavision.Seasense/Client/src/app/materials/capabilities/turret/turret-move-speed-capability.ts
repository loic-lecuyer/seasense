import { SettingCapability } from "../../settings/setting-capability";
import { Capability } from "../capability";

export class TurretMoveSpeedCapability implements Capability {
  id: string;
  constructor(settingCapability: SettingCapability) {
    this.id = settingCapability.id;
  }

}
