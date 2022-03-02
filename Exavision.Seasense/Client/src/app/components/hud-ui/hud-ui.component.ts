import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraZoomContinuousCapability } from '../../materials/capabilities/camera/camera-zoom-continuous-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretMoveSpeedCapability } from '../../materials/capabilities/turret/turret-move-speed-capability';
import { Material } from '../../materials/material';
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
  public hasMultipleCamera: boolean = false;
  public hasPipZoom: boolean = false;
  public hasCameraAutoFocusCapability: boolean = false;
  public hasCameraFocusContinuousCapability: boolean = false;
  public hasWasherCapability: boolean = false;
  public hasRecordCapability: boolean = false;
  public hasScreenshotCapability: boolean = false;
  public hasStabilizationCapability: boolean = false;
  public hasLrf: boolean = false;
  
  
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
      let cameraCount = 0;
      this.siteService.selectedUnit?.materials.forEach((value: Material) => {
        if (value.materialType == MaterialType.DayCamera || value.materialType == MaterialType.ThermalCamera) {
          cameraCount++;
        }
      });
      this.hasMultipleCamera = cameraCount > 1;
      this.hasPipZoom = cameraCount > 0 && this.siteService.selectedCamera != null;
      if (this.siteService.selectedCamera != null) {
        this.hasZoomContinuousCapability = this.siteService.selectedCamera.hasCapability(CapabilityType.CameraZoomContinuous);
      }
      else {
        this.hasZoomContinuousCapability = false;
      }
    }
    else {
      this.hasMultipleCamera = false;
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

  onSwitchCameraDown() {
    this.siteService.selectNextCamera();
  }

}
