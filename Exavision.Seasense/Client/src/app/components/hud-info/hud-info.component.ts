import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraZoomAbsolutePositionCapability } from '../../materials/capabilities/camera/camera-zoom-absolute-position-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretAbsolutePositionCapability } from '../../materials/capabilities/turret/turret-absolute-position-capability';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-hud-info',
  templateUrl: './hud-info.component.html',
  styleUrls: ['./hud-info.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudInfoComponent implements OnInit, OnDestroy {

  currentTilt: number = 0;
  currentPan: number = 0;
  currentHfov: number = 0;
  private stateSubscription: Subscription;
  constructor(public siteService: SiteService, public uiService: UiService) {
    this.stateSubscription=   this.siteService.siteStateSubject.subscribe(() => { this.updateValues(); });
  }
  updateValues() {
    if (this.siteService.selectedUnit == null) return;
    let turret: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.Turret);
    if (turret == undefined) return;
    let posCap: TurretAbsolutePositionCapability | undefined = turret.getCapability<TurretAbsolutePositionCapability>(CapabilityType.TurretAbsolutePosition);
    if (posCap == undefined) return;
    this.currentPan = posCap.pan;
    this.currentTilt = posCap.tilt;
    if (this.siteService.selectedCamera == undefined) return;
    let zoomPosCap: CameraZoomAbsolutePositionCapability | undefined = this.siteService.selectedCamera.getCapability<CameraZoomAbsolutePositionCapability>(CapabilityType.CameraZoomAbsolutePosition);
    if (zoomPosCap == undefined) return;
    this.currentHfov = zoomPosCap.horizontalFieldOfView;

 }
  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }
  ngOnInit(): void {
  }

}
