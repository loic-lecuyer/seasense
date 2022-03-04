import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as nipplejs from 'nipplejs';
import { JoystickManager } from 'nipplejs';
import { Subscription } from 'rxjs';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { TurretMoveSpeedCapability } from '../../materials/capabilities/turret/turret-move-speed-capability';
import { MaterialType } from '../../materials/material-type';
import { SiteService } from '../../services/site.service';
@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss']
})
export class StickComponent implements AfterViewInit, OnInit, OnChanges, AfterContentInit{
  @ViewChild("nipplejshost") nipplejshost: any = null;
  private commandInterval : number = 100;
  private nippleControl: JoystickManager | undefined = undefined;
  private commandIntervalTimer: any;
  private turretMoveSpeedCapability: TurretMoveSpeedCapability | undefined = undefined;
  public axisX: number = 0;
  public axisY: number = 0;
  public lastSendAxisX: number = 0;
  public lastSendAxisY: number = 0;
  private unitSelectedSubscription: Subscription;
  constructor(private cdref: ChangeDetectorRef, private siteService: SiteService) {
    this.commandIntervalTimer = setInterval(() => {
      this.updateStickInfos();
    }, this.commandInterval);

    this.findTurretMoveSpeedCapability();
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(this.findTurretMoveSpeedCapability);

  }
  findTurretMoveSpeedCapability() {
    if (this.siteService == null) {
      this.turretMoveSpeedCapability = undefined;
      return;
    }
    if (this.siteService.selectedUnit == null) {
      this.turretMoveSpeedCapability = undefined;
      return;
    }
    this.turretMoveSpeedCapability = this.siteService.selectedUnit.getMaterialCapability(MaterialType.Turret, CapabilityType.TurretMoveSpeed);
    
  }
  ngOnInit(): void {


  }
  updateStickInfos() {

    if (this.lastSendAxisX != this.axisX || this.lastSendAxisY != this.axisY) {
      if (this.turretMoveSpeedCapability != null) {
        console.log("Call turretMoveSpeedCapability.moveSpeed " + this.axisX + " " + this.axisY);
        this.turretMoveSpeedCapability.moveSpeed(this.axisX, this.axisY);

      }
    }
    this.lastSendAxisX = this.axisX;
    this.lastSendAxisY = this.axisY;
  }
  ngOnDestroy() {
    clearInterval(this.commandIntervalTimer);
    this.unitSelectedSubscription.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges) {
   
  }
  ngAfterContentInit(): void {
  
  }
  ngAfterViewInit(): void {
    // NippleJs creation is deffered.
    // without deffred instanciation stick initialization is corrupted.
    setTimeout(() => {
      this.nippleControl = nipplejs.create({
        zone: this.nipplejshost.nativeElement,
        mode: 'static',
        position: { left: '80px', top: '80px' },
        color: 'blue',
        restOpacity:1,
        
      });
      this.nippleControl.on('start', (evt, data) => {       
        this.axisX = 0;
        this.axisY = 0;
      });

      this.nippleControl.on('end', (evt, data) => {       
        this.axisX = 0;
        this.axisY = 0;
      });
      this.nippleControl.on('move', (evt, data) => {      
        this.axisX = data.vector.x;
        this.axisY = data.vector.y;
      });
     }, 500);
    
  }

}
