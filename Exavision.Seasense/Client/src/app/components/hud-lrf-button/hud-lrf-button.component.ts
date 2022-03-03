import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { LazerMeasurementShootCapability } from '../../materials/capabilities/lazer-measurement/lazer-measurement-shoot-capability';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-hud-lrf-button',
  templateUrl: './hud-lrf-button.component.html',
  styleUrls: ['./hud-lrf-button.component.scss']
})
export class HudLrfButtonComponent implements OnInit, OnDestroy {
  private isMouseDown: boolean = false;
  public isContinuousMode: boolean = false;
  private continuousTriggerTimer: any;
  private ignoreNextClick: boolean = false;
  private continuousShootTimer: any;
  @Output() shoot: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private siteService: SiteService) {
    
    
  }
  lazerMeasurementShoot() {
    if (this.siteService.selectedUnit == null) return;
    let lazer: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.LazerMeasurement);
    if (lazer == null) return;
    let cap: LazerMeasurementShootCapability | undefined = lazer.getCapability<LazerMeasurementShootCapability>(CapabilityType.LazerMeasurementShootCapability);
    if (cap == null) return;
    cap.shootMeasure();
  }
  ngOnDestroy() {
    clearInterval(this.continuousShootTimer);
  }

  ngOnInit(): void {
    this.continuousShootTimer = setInterval(() => {
      if (this.isContinuousMode === true) {
        this.lazerMeasurementShoot();
      }
    

    }, 500);

  }

  onMouseDown() {
    this.isMouseDown = true;
    this.continuousTriggerTimer = setTimeout(() => {
      this.isContinuousMode = true;
      this.ignoreNextClick = true;
    }, 1000);


  }

  onMouseUp() {
    if (this.isMouseDown && this.isContinuousMode) {
      this.ignoreNextClick = true;
      this.isMouseDown = false;
    }
    else {
      this.isMouseDown = false;
      clearTimeout(this.continuousTriggerTimer);
    }

  }

  onMouseClick() {
    if (this.ignoreNextClick === true) {
      this.ignoreNextClick = false;
    }
    else {
      this.lazerMeasurementShoot();
      this.isContinuousMode = false;
    }


  }

  @HostListener('document:pointerup', ['$event'])
  onDocumentPointerUp(evt: any) {
    if (this.isMouseDown === true && !this.ignoreNextClick === true) {
      this.isMouseDown = false;
      clearTimeout(this.continuousTriggerTimer);
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onDocumentMouse(evt: any) {
    if (this.isMouseDown === true && !this.ignoreNextClick === true) {
      this.isMouseDown = false;
      clearTimeout(this.continuousTriggerTimer);

    }
  }
}
