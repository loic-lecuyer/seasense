import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraZoomAbsolutePositionCapability } from '../../materials/capabilities/camera/camera-zoom-absolute-position-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretAbsolutePositionCapability } from '../../materials/capabilities/turret/turret-absolute-position-capability';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { CompasText } from '../../models/compas-text';
import { CompasTick } from '../../models/compas-tick';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-hud-ruller-tilt',
  templateUrl: './hud-ruller-tilt.component.html',
  styleUrls: ['./hud-ruller-tilt.component.scss']
})
export class HudRullerTiltComponent implements OnInit, OnDestroy {

  public ticks: CompasTick[] = [];
  public texts: CompasText[] = [];
  public isVisible: boolean = false;
  private textCount: number = 30;
  private unitSelectedSubscription: Subscription;
  private cameraSelectedSubscription: Subscription;
  private siteStateSubscription: Subscription;
  constructor(private el: ElementRef, private siteService: SiteService,private uiService: UiService) {
    this.initializeTickAndText();
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateTickAndText(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateTickAndText(); });
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateTickAndText(); });
  }

  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();
    this.siteStateSubscription.unsubscribe();
  }

  updateTickAndText() {
    if (this.uiService.displayStreamHeight == null) {
      this.isVisible = false;
      return;
    }
    if (this.siteService.selectedUnit == null) {
      this.isVisible = false;
      return;
    }
    if (this.siteService.selectedCamera == null) {
      this.isVisible = false;
      return;
    }
    let turret: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.Turret);
    if (turret == null) {
      this.isVisible = false;
      return;
    }
    let absolutPositionCap: TurretAbsolutePositionCapability | undefined = turret.getCapability<TurretAbsolutePositionCapability>(CapabilityType.TurretAbsolutePosition);
    if (absolutPositionCap == null) {
      this.isVisible = false;
      return;
    }

    let absoluteZoomPositionCap: CameraZoomAbsolutePositionCapability | undefined = this.siteService.selectedCamera.getCapability<CameraZoomAbsolutePositionCapability>(CapabilityType.CameraZoomAbsolutePosition);
    if (absoluteZoomPositionCap == null) {
      this.isVisible = false;
      return;
    }
    this.isVisible = true;
    let hfov = absoluteZoomPositionCap.horizontalFieldOfView;
    let ratio = this.siteService.selectedCamera.streamWidth / this.siteService.selectedCamera.streamHeight;
    let vFov = hfov / ratio;
    let tilt = absolutPositionCap.tilt;
    let style = getComputedStyle(this.el.nativeElement);
    let displayHeight = parseFloat(style.height.replace('px', ''));
    let degreePerPixel = vFov / this.uiService.displayStreamHeight;

    let minTick = Math.round(tilt) - (this.textCount / 2);

    // Mise a jour des degrées
    let degree: number = minTick;

    this.ticks.forEach((tick: CompasTick, index: number) => {
      var rounded = Math.round(degree * 10) / 10;
      tick.degree = rounded;
      degree += 0.1;
    });


    this.texts.forEach((text: CompasText, index: number) => {
      text.degree = minTick + index;
    });

    var x: number = 0;
    var y: number = 20;
    var delta: number = 0;
    // Calcul des position Y
    this.texts.forEach((text: CompasText) => {
      delta = (text.degree - tilt);
      let ratio = Math.abs(delta) / (displayHeight * degreePerPixel / 6);
      y = displayHeight - ((displayHeight / 2) + (delta / degreePerPixel));
      text.text = (text.degree).toFixed(0) + "°";
      text.x = 10;
      text.y = y + 5;
      text.opacity = 1;
    });
    this.ticks.forEach((tick: CompasTick) => {
      delta = (tick.degree - tilt);
      let ratio = Math.abs(delta) / (displayHeight * degreePerPixel / 6);
      x = 4;
      y = displayHeight - ((displayHeight / 2) + (delta / degreePerPixel));
      if ((tick.degree % 1) == 0) {
        x = 8;
      }
      tick.x1 = 0;
      tick.x2 = x;
      tick.y1 = y;
      tick.y2 = y;
      tick.opacity = 1;
      degree += 0.1;
    });
   
  }
  initializeTickAndText() {
    let initTicks: CompasTick[] = [];
    let initTexts: CompasText[] = [];
    var i: number;
    var y: number;
    for (i = 0; i < this.textCount; i++) {
      initTexts.push({
        x: 0,
        y: 0,
        text: "",
        degree: 0,
        opacity: 1
      });
    }
    this.texts = initTexts;
    for (i = 0; i < this.textCount * 10; i++) {

      initTicks.push({
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0,
        opacity: 0,
        degree: 0
      });
      this.ticks = initTicks;
    }
  }

  ngOnInit(): void {
  }

}
