import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraZoomAbsolutePositionCapability } from '../../materials/capabilities/camera/camera-zoom-absolute-position-capability';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretAbsolutePositionCapability } from '../../materials/capabilities/turret/turret-absolute-position-capability';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { Turret } from '../../materials/turret';
import { CompasText } from '../../models/compas-text';
import { CompasTick } from '../../models/compas-tick';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-hud-ruller-pan',
  templateUrl: './hud-ruller-pan.component.html',
  styleUrls: ['./hud-ruller-pan.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudRullerPanComponent implements OnInit, OnDestroy {

  public isVisible: boolean = false;

  public ticks: CompasTick[] = [];
  // Texts du vernier
  public texts: CompasText[] = [];

  // Nombre de texts affiché
  private textCount: number = 30;
  private unitSelectedSubscription: Subscription;
  private cameraSelectedSubscription: Subscription;
  private siteStateSubscription: Subscription;

  constructor(private el: ElementRef,private siteService: SiteService) {
    this.initializeTickAndText();
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateTickAndText(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateTickAndText(); });
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => {  this.updateTickAndText(); });

  }
  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();
    this.siteStateSubscription.unsubscribe();
  }

  updateTickAndText() {
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
    let pan = absolutPositionCap.pan;
    let style = getComputedStyle(this.el.nativeElement);
    let displayWidth = parseFloat(style.width.replace('px', ''));
    let degreePerPixel = hfov / displayWidth;
    let minTick = Math.round(pan) - (this.textCount / 2);

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
    // Calcul des position X
    let alternateVisibility: boolean = false;
    if (this.texts.length > 10) {
      alternateVisibility = true;
    }
    let textIndex: number = 0;
    this.texts.forEach((text: CompasText) => {
      delta = text.degree - pan;
 
      x = (displayWidth / 2) + (delta / degreePerPixel);
      let textDegree: number = (text.degree + 360) % 360;
      text.text = textDegree.toFixed(0) + "°";
      text.x = x - (text.degree.toFixed(0).length * 10 / 2);
      text.y = 20;
      text.opacity = 1;    
      textIndex++;

    });
    this.ticks.forEach((tick: CompasTick) => {
      delta = tick.degree - pan;
     
      x = (displayWidth / 2) + (delta / degreePerPixel);
      y = 28;
      if ((tick.degree % 1) == 0) {
        y = 24;
      }
      tick.x1 = x;
      tick.x2 = x;
      tick.y1 = y;
      tick.y2 = 32;
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
