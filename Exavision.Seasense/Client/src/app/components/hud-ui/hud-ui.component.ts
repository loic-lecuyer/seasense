import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private unitSelectedSubscription: Subscription;
  constructor(private siteService: SiteService) {
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
  }
  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.updateVisibilityFlags();
  }
  updateVisibilityFlags() {
    if (this.siteService.selectedUnit != null) {
      this.hasMoveSpeedCapability = this.siteService.selectedUnit.hasMaterialWithCapability(MaterialType.Turret, CapabilityType.TurretMoveSpeed);
    }
    
  }

}
