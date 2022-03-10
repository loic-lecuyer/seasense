import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraZoomAbsolutePositionCapability } from '../../materials/capabilities/camera/camera-zoom-absolute-position-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretAbsolutePositionCapability } from '../../materials/capabilities/turret/turret-absolute-position-capability';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { RecordingState } from '../../materials/states/recording-state';
import { Status, StatusState } from '../../materials/states/status-state';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'app-hud-info',
  templateUrl: './hud-info.component.html',
  styleUrls: ['./hud-info.component.scss'],
  host: { 'class': 'hud-layer' },
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])

  ]
})
export class HudInfoComponent implements OnInit, OnDestroy {

  currentTilt: number = 0;
  currentPan: number = 0;
  currentHfov: number = 0;
  isTooltipOpen: boolean = false;
  mediaInfo: string | null = null;
  recordings: RecordingState[] = [];
  private stateSubscription: Subscription;
  private screenshotSubscription: Subscription;
  public detailMaterial: Material | null = null;
  constructor(public siteService: SiteService, public uiService: UiService, private wsService: WsService) {
    this.stateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateValues(); });
    this.screenshotSubscription =  this.wsService.screenshootSubject.subscribe((fileName: string) => {
      this.mediaInfo = "Screenshot preformed " + fileName;
      setTimeout(() => { this.mediaInfo = null }, 1300);
        
    });

  }
  updateValues() {
    if (this.siteService.site == null) return;
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

    this.recordings = [];
    this.recordings = this.recordings.concat(this.siteService.site.recordings);


 }
  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.screenshotSubscription.unsubscribe();
  }
  ngOnInit(): void {
  }
  getMaterialStatusClass(material: Material): string {
    let errorCount: number = 0;
    let warningCount: number = 0;
    material.status.forEach((val: StatusState) => {
      if (val.status == Status.Error) {
        errorCount++;
      }
      if (val.status == Status.Warning) {
        warningCount++;
      }
    });
    if (errorCount > 0) {
      return "red led";
    }
    else if (warningCount > 0) {
      return "yellow led";
    }
    return "green led";
  }

  setDetailMaterial(material: Material | null) {
    this.detailMaterial = material;
  }

}
