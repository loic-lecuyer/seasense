import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CapabilityType } from '../../materials/capabilities/capability-type';
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

  constructor(private renderer: Renderer2, private siteService: SiteService) {
    this.svgTurret = null;
    this.svgDirection = null;
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateUi(); });
  }
  updateUi() {
    if (this.siteService.selectedUnit != null) {
      let cap: TurretAbsolutePositionCapability | undefined = this.siteService.selectedUnit.getMaterialCapability<TurretAbsolutePositionCapability>(MaterialType.Turret, CapabilityType.TurretAbsolutePosition);
      if (cap != null) {
        let rotateInfoTurret = "rotate(" + cap.pan.toFixed(0) + "deg)";
        if (this.svgTurret != null) {
          this.renderer.setStyle(this.svgTurret.nativeElement, 'transform', rotateInfoTurret);
        }
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
