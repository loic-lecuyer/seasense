import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { InertialMeasurementMeasureCapability } from '../../materials/capabilities/inertial-measurement/inertial-measurement-measure-capability';
import { TurretAbsolutePositionCapability } from '../../materials/capabilities/turret/turret-absolute-position-capability';
import { MaterialType } from '../../materials/material-type';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})
export class CompassComponent implements OnInit, OnDestroy {
  private siteStateSubscription: Subscription;
  @ViewChild('svgTurret') svgTurret: ElementRef | null;
  @ViewChild('svgDirection') svgDirection: ElementRef | null;
  public info: string = "";
  

  constructor(private renderer: Renderer2, private siteService: SiteService) {
    this.svgTurret = null;
    this.svgDirection = null;
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateUi(); });
  }
  updateUi() {
    this.info = "";
    let rotateInfoTurret = "rotate(0deg)";
    let rotateInfoDirection = "rotate(0deg)";
    if (this.siteService.selectedUnit != null) {

      let capPosition: TurretAbsolutePositionCapability | undefined = this.siteService.selectedUnit.getMaterialCapability<TurretAbsolutePositionCapability>(MaterialType.Turret, CapabilityType.TurretAbsolutePosition);
      if (capPosition != null) {
        rotateInfoTurret = "rotate(" + capPosition.pan.toFixed(0) + "deg)";
        this.info += "Pan : " + capPosition.pan.toFixed(2) + "°\nTilt : " + capPosition.tilt.toFixed(2) +"°\n";
      }
      
      let capInertial: InertialMeasurementMeasureCapability | undefined = this.siteService.selectedUnit.getMaterialCapability<InertialMeasurementMeasureCapability>(MaterialType.InertialMeasurement, CapabilityType.InertialMeasurementMeasure);
      if (capInertial != null) {
        rotateInfoDirection = "rotate(" + capInertial.angleY.toFixed(0) + "deg)";
        this.info += "Imu X : " + capInertial.angleX.toFixed(2) + "°\nImu Y : " + capInertial.angleY.toFixed(2) + "\nImu Z : " + capInertial.angleZ.toFixed(2)+"°";
      }
      if (this.svgTurret != null) {
        this.renderer.setStyle(this.svgTurret.nativeElement, 'transform', rotateInfoTurret);
      }
      if (this.svgDirection != null) {
        this.renderer.setStyle(this.svgDirection.nativeElement, 'transform', rotateInfoDirection);
      }
    }
  }
  ngOnDestroy() {
    this.siteStateSubscription.unsubscribe();

  }
  ngOnInit(): void {
    this.updateUi();
  }

}
