import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GetSettingResponse } from '../api/http/get-setting-response';
import { Site } from '../materials/site';
import { Unit } from '../materials/unit';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
 
  public siteLoadedSubject: Subject<Site | undefined> = new Subject<Site | undefined>();
  public unitSelectedSubject: Subject<Unit | undefined> = new Subject<Unit | undefined>();
  public site: Site | undefined = undefined;
  public selectedUnit: Unit | undefined = undefined;

  createSite(response: GetSettingResponse) {
    this.site = undefined;    
    if (response.site != null) {
      this.site = new Site(response.site);      
    }   
    if (this.site != null && this.site.units.length > 0) {
      this.selectUnitById(this.site.units[0].id);
    }
    this.siteLoadedSubject.next(this.site);
  }

  selectUnitById(unitId: string) {
    let unit: Unit | undefined = this.site?.units.find((value: Unit) => {
      return value.id == unitId;
    });
    this.selectedUnit = unit;
    this.unitSelectedSubject.next(unit);
  }

  constructor() { }
}
