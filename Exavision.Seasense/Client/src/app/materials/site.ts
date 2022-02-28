import { WsService } from "../services/ws.service";
import { Capability } from "./capabilities/capability";
import { Factory } from "./factory";
import { SettingCapability } from "./settings/setting-capability";
import { SettingSite } from "./settings/setting-site";
import { SettingUnit } from "./settings/setting-unit";
import { CapabilityState } from "./states/capability-state";
import { SiteState } from "./states/site-state";
import { UnitState } from "./states/unit-state";
import { Unit } from "./unit";


export class Site {
  
  public id: string;
  public units: Unit[] = [];
  public capabilities: Capability[] = [];
  constructor(settingSite: SettingSite, wsService: WsService, factory: Factory ) {
   
    this.id = settingSite.id;
  
    settingSite.units.forEach((settingUnit: SettingUnit) => {
      let unit: Unit = new Unit(settingUnit, this, wsService, factory);
      this.units.push(unit);
    });

    settingSite.capabilities.forEach((settingCapability: SettingCapability) => {
      let capability: Capability = factory.createCapability(settingCapability);     
      this.capabilities.push(capability);
    });

  }

  setState(siteState: SiteState) {
    siteState.units.forEach((valueState: UnitState) => {
      let unit: Unit | undefined = this.units.find((valueUnit: Unit) => { return valueUnit.id === valueState.id; });
      if (unit != null) {
        unit.setState(valueState);
      }
    });
    siteState.capabilities.forEach((valueState: CapabilityState) => {
      let cap: Capability | undefined = this.capabilities.find((valueCap: Capability) => { return valueCap.id === valueState.id; });
      if (cap != null) {
        cap.setState(valueState);
      }
    });
  }
}

