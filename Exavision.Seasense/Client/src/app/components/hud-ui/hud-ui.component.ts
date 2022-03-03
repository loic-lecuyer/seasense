import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Camera } from '../../materials/camera';
import { CameraAutoFocusOnePushCapability } from '../../materials/capabilities/camera/camera-auto-focus-one-push-capability';
import { CameraZoomContinuousCapability } from '../../materials/capabilities/camera/camera-zoom-continuous-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretGyrostabilizationCapability } from '../../materials/capabilities/turret/turret-gyrostabilization-capability';
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
  public hasPipZoom: boolean = false;
  public hasMultipleCamera: boolean = false;

  public hasMoveSpeedCapability: boolean = false;
  public hasZoomContinuousCapability: boolean = false;
  public hasCameraAutoFocusCapability: boolean = false;
  public hasCameraFocusContinuousCapability: boolean = false;
  public hasWasherCapability: boolean = false;
  public hasRecordCapability: boolean = false;
  public hasScreenshotCapability: boolean = false;
  public hasGyroStabilizationCapability: boolean = false;
  public hasLrf: boolean = false;


  public isTurretGyroStabilizationEnabled: boolean = false;

  private unitSelectedSubscription: Subscription;
  private cameraSelectedSubscription: Subscription;
  private siteStateSubscription: Subscription;
  constructor(private siteService: SiteService, private snackBar: MatSnackBar) {
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => {
      this.updateCheckState();
      this.updateSwitchState();
    });
  }
 
  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();
    this.siteStateSubscription.unsubscribe();
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
      this.hasLrf = this.siteService.selectedUnit.getMaterial(MaterialType.LazerMeasurement) != null;
   

      this.hasGyroStabilizationCapability = this.siteService.selectedUnit.hasMaterialWithCapability(MaterialType.Turret, CapabilityType.TurretGyrostabilization);

      if (this.siteService.selectedCamera != null) {
        this.hasCameraAutoFocusCapability = this.siteService.selectedCamera?.hasCapability(CapabilityType.CameraAutoFocusOnePush);
        this.hasZoomContinuousCapability = this.siteService.selectedCamera.hasCapability(CapabilityType.CameraZoomContinuous);
        this.hasRecordCapability = true;
        this.hasScreenshotCapability = true;
      }
      else {
        this.hasZoomContinuousCapability = false;
        this.hasCameraAutoFocusCapability = false;
        this.hasCameraFocusContinuousCapability = false;
        this.hasRecordCapability = false;
        this.hasScreenshotCapability = false;
      }
    }
    else {
      this.hasMultipleCamera = false;
      this.hasMoveSpeedCapability = false;
      this.hasZoomContinuousCapability = false;
      this.hasCameraAutoFocusCapability = false;
      this.hasCameraFocusContinuousCapability = false;
      this.hasRecordCapability = false;
      this.hasScreenshotCapability = false;
      this.hasWasherCapability = false;
      this.hasGyroStabilizationCapability = false;
      this.hasLrf = false;
    }

  }


  updateSwitchState() {
   
  }
  updateCheckState() {
    if (this.siteService.selectedUnit == null) return;
    let material: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.Turret);
    if (material != null) {
      let cap: TurretGyrostabilizationCapability | undefined = material.getCapability(CapabilityType.TurretGyrostabilization);
      if (cap != null) {
        this.isTurretGyroStabilizationEnabled = cap.isGyrostabilizationEnabled;
      }
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
    let camera: Camera | undefined = this.siteService.selectNextCamera();
    if (camera == null) return;

    this.snackBar.open("Display : " + camera.displayName,"", {
      duration: 3000,
      panelClass: 'seasense-snackbar'
    });
  }
  onStablizationCheckChange(enabled: boolean) {
    if (this.siteService.selectedUnit == null) return;
    let material: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.Turret);
    if (material == null) return;
    let cap: TurretGyrostabilizationCapability | undefined = material.getCapability(CapabilityType.TurretGyrostabilization);
    if (cap == null) return;
    cap.setGyrostabilization(enabled);

  }
  onAutoFocusButtonDown() {
    if (this.siteService.selectedCamera == undefined) return;
    let cap: CameraAutoFocusOnePushCapability | undefined = this.siteService.selectedCamera.getCapability<CameraAutoFocusOnePushCapability>(CapabilityType.CameraAutoFocusOnePush);
    if (cap != null) cap.autoFocusOnePush();
  }

}
