import { Capability } from "./capabilities/capability";
import { Factory } from "./factory";
import { SettingCapability } from "./settings/setting-capability";
import { SettingSite } from "./settings/setting-site";
import { SettingUnit } from "./settings/setting-unit";
import { Unit } from "./unit";


export class Site {
  public id: string;
  public units: Unit[] = [];
  public capabilities: Capability[] = [];
  constructor(settingSite: SettingSite) {
   
    this.id = settingSite.id;
    let factory: Factory = new Factory();
    settingSite.units.forEach((settingUnit: SettingUnit) => {
      let unit: Unit = new Unit(settingUnit);
      this.units.push(unit);
    });

    settingSite.capabilities.forEach((settingCapability: SettingCapability) => {
      let capability: Capability = factory.createCapability(settingCapability);
      this.capabilities.push(capability);
    });

  }
}

