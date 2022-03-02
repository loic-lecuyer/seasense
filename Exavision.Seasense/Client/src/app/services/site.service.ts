import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GetSettingResponse } from '../api/http/get-setting-response';
import { Camera } from '../materials/camera';
import { Factory } from '../materials/factory';
import { Material } from '../materials/material';
import { MaterialType } from '../materials/material-type';
import { SettingSite } from '../materials/settings/setting-site';
import { Site } from '../materials/site';
import { SiteState } from '../materials/states/site-state';
import { Unit } from '../materials/unit';
import { WsService } from './ws.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public siteStateSubject: Subject<Site | undefined> = new Subject<Site | undefined>();
  public siteLoadedSubject: Subject<Site | undefined> = new Subject<Site | undefined>();
  public unitSelectedSubject: Subject<Unit | undefined> = new Subject<Unit | undefined>();
  public cameraSelectedSubject: Subject<Camera | undefined> = new Subject<Camera | undefined>();
  public site: Site | undefined = undefined;
  public selectedUnit: Unit | undefined = undefined;
  public selectedCamera: Camera | undefined = undefined;
  public siteSetting: SettingSite = {
    id: 'none',
    capabilities:[],
    units: [],
    type: 'Site',
    displayName:'Site'
  };
  constructor(private wsService: WsService) {

    this.wsService.siteStateSubject.subscribe((value: SiteState) => { this.onStateChange(value); });
  }
  onStateChange(siteState: SiteState) {
    if (this.site != null) {
      this.site.setState(siteState);
      this.siteStateSubject.next(this.site);
    }   
  }
  createSite(response: GetSettingResponse) {
    this.site = undefined;    
    if (response.site != null) {
      this.siteSetting = response.site;
      let factory: Factory = new Factory();
      this.site = new Site(response.site, this.wsService, factory);      
    }   
    if (this.site != null && this.site.units.length > 0) {
      this.selectUnitById(this.site.units[0].id);
      if (this.selectedUnit != null) {
        let dayCamera: Camera = <Camera>this.selectedUnit.getMaterial(MaterialType.DayCamera)
        if (dayCamera != null) {
          this.selectedCamera = dayCamera;
        }
        else {

          let thermalCamera: Camera = <Camera>this.selectedUnit.getMaterial(MaterialType.ThermalCamera)
          if (thermalCamera != null) {
            this.selectedCamera = thermalCamera;          
          }
          else {
            this.selectedCamera = undefined;          
          }
        }
       
      }
    }
    this.siteLoadedSubject.next(this.site);
    this.unitSelectedSubject.next(this.selectedUnit);
    this.cameraSelectedSubject.next(this.selectedCamera);
  }

  selectUnitById(unitId: string) {
    let unit: Unit | undefined = this.site?.units.find((value: Unit) => {
      return value.id == unitId;
    });
    this.selectedUnit = unit;    
  }

  
}
