import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraZoomContinuousCapability } from '../../materials/capabilities/camera/camera-zoom-continuous-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretMoveSpeedCapability } from '../../materials/capabilities/turret/turret-move-speed-capability';
import { MaterialType } from '../../materials/material-type';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-hud-ui',
  templateUrl: './hud-ui.component.html',
  styleUrls: ['./hud-ui.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudUiComponent implements OnInit, OnDestroy {
  public isLeftToRight: boolean = true;
  public hasMoveSpeedCapability: boolean = false;
  public hasZoomContinuousCapability: boolean = false;
  private unitSelectedSubscription: Subscription;
  private cameraSelectedSubscription: Subscription;
  constructor(private siteService: SiteService) {
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
  }
  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.updateVisibilityFlags();
  }
  updateVisibilityFlags() {
    if (this.siteService.selectedUnit != null) {
      this.hasMoveSpeedCapability = this.siteService.selectedUnit.hasMaterialWithCapability(MaterialType.Turret, CapabilityType.TurretMoveSpeed);
      if (this.siteService.selectedCamera != null) {
        this.hasZoomContinuousCapability = this.siteService.selectedCamera.hasCapability(CapabilityType.CameraZoomContinuous);
      }
      else {
        this.hasZoomContinuousCapability = false;
      }
    }
    else {
      this.hasMoveSpeedCapability = false;
      this.hasZoomContinuousCapability = false;
    }
    
  }
  onZoomInDown() {
    if (this.siteService.selectedCamera == undefined) return;
    console.log("onZoomInDown");
    let cap: CameraZoomContinuousCapability | undefined = this.siteService.selectedCamera.getCapability<CameraZoomContinuousCapability>(CapabilityType.CameraZoomContinuous);
    if (cap != null) cap.zoomInStart();
  }
  onZoomUp() {
    console.log("onZoomUp");
    if (this.siteService.selectedCamera == undefined) return;
    let cap: CameraZoomContinuousCapability | undefined = this.siteService.selectedCamera.getCapability<CameraZoomContinuousCapability>(CapabilityType.CameraZoomContinuous);
    if (cap != null) cap.zoomStop();
  }
  onZoomOutDown() {
    console.log("onZoomOutDown");
    if (this.siteService.selectedCamera == undefined) return;
    let cap: CameraZoomContinuousCapability | undefined = this.siteService.selectedCamera.getCapability<CameraZoomContinuousCapability>(CapabilityType.CameraZoomContinuous);
    if (cap != null) cap.zoomOutStart();
  }
}
