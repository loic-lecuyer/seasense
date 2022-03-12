import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { WsCameraStartRecordResponse } from '../../api/ws/ws-camera-start-record-response';
import { Camera } from '../../materials/camera';
import { CameraAutoFocusOnePushCapability } from '../../materials/capabilities/camera/camera-auto-focus-one-push-capability';
import { CameraZoomContinuousCapability } from '../../materials/capabilities/camera/camera-zoom-continuous-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { LazerMeasurementShootCapability } from '../../materials/capabilities/lazer-measurement/lazer-measurement-shoot-capability';
import { TurretGyrostabilizationCapability } from '../../materials/capabilities/turret/turret-gyrostabilization-capability';
import { TurretMoveSpeedCapability } from '../../materials/capabilities/turret/turret-move-speed-capability';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { RecordingState } from '../../materials/states/recording-state';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'app-hud-ui',
  templateUrl: './hud-ui.component.html',
  styleUrls: ['./hud-ui.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudUiComponent implements OnInit, OnDestroy {

 

  

  public runningRecord: RecordingState | undefined = undefined;
  public isLeftToRight: boolean = true;
  public hasPipZoom: boolean = false;
  public hasMultipleCamera: boolean = false;
  public lrfInfo: string = "";

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
  private isLeftTorighSubscription: Subscription;


  constructor(private siteService: SiteService, private snackBar: MatSnackBar, private uiService: UiService, private wsService: WsService) {
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => {
      this.updateCheckState();
      this.updateSwitchState();
      this.updateLrfInfo();
    });
    this.isLeftTorighSubscription = this.uiService.isLeftTorightSubject.subscribe((isleftToRigth: boolean) => { this.isLeftToRight = isleftToRigth; });

    
    
  }
  onPipZoomButtonDown() {
    this.uiService.showHidePipZoom();  
  }
 
  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();
    this.siteStateSubscription.unsubscribe();
    this.isLeftTorighSubscription.unsubscribe();
  
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
      console.log("has lrf " + this.hasLrf);

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

    if (this.siteService.site != null && this.siteService.site.recordings != null && this.siteService.selectedCamera != null) {
      this.runningRecord = this.siteService.site.recordings.find((val: RecordingState) => { return val.materialId === this.siteService.selectedCamera?.id });
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
  onScreenshot() {
    if (this.siteService.selectedCamera != null && this.siteService.selectedUnit != null) {
      this.wsService.screenshot(this.siteService.selectedUnit.id, this.siteService.selectedCamera.id);
      this.uiService.notifyMediaChange(500);

    }
  }
  onRecordClick() {
    if (this.siteService.selectedCamera != null && this.siteService.selectedUnit != null) {
      if (!this.runningRecord) {
        this.wsService.startRecord(this.siteService.selectedUnit.id, this.siteService.selectedCamera.id);
      }
      else {
        this.wsService.stopRecord(this.siteService.selectedUnit.id, this.siteService.selectedCamera.id, this.runningRecord.id);
        this.uiService.notifyMediaChange(500);
      }
      
    }
  }
  onAutoFocusButtonDown() {
    if (this.siteService.selectedCamera == undefined) return;
    let cap: CameraAutoFocusOnePushCapability | undefined = this.siteService.selectedCamera.getCapability<CameraAutoFocusOnePushCapability>(CapabilityType.CameraAutoFocusOnePush);
    if (cap != null) cap.autoFocusOnePush();
  }

  updateLrfInfo() {
    if (this.siteService.selectedUnit == null) {
      this.lrfInfo = "";
      return;
    }
    let lazer: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.LazerMeasurement);
    if (lazer == null) {
      this.lrfInfo = "";
      return;
    }
    let cap: LazerMeasurementShootCapability | undefined = lazer.getCapability<LazerMeasurementShootCapability>(CapabilityType.LazerMeasurementShootCapability);
    if (cap == null) {
      this.lrfInfo = "";
      return;
    }
    if (cap.lastShootDate == null) {
      this.lrfInfo = "";
      return;
    }
    if (cap.isOn === false) {
      this.lrfInfo = "";
      return;
    }
    let today: Date = new Date();
    let shootDate: Date = cap.lastShootDate;
    let seconds: number = (today.getTime() - cap.lastShootDate.getTime()) / 1000;
    if (seconds < 5) {
      if (cap.lastShootDistance != null) {
        this.lrfInfo = cap.lastShootDistance + " m";
      }
      else if (cap.error != null) {
        this.lrfInfo = cap.error;
      }
      else {
        this.lrfInfo = "";
      }
    } else {
      this.lrfInfo = "";
    }

  }

}
