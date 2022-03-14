import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subscription } from 'rxjs';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { UnitSavCapability } from '../../materials/capabilities/unit/unit-sav-capability';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'app-panel-sav',
  templateUrl: './panel-sav.component.html',
  styleUrls: ['./panel-sav.component.scss']
})
export class PanelSavComponent implements OnInit,OnDestroy {

  @ViewChild('tcpMessagesCtrl') private tcpMessagesCtrl: ElementRef | undefined = undefined;
  public savCapability: UnitSavCapability | undefined = undefined;
  siteStateSubscription: Subscription;
  latestComMessageSubscription: Subscription;
  public tcpMessageToSend: string = "";
  public tcpMessages: string = "";
  private tcpMessageTimer: any;
  public isPollingEnabled: boolean = true;
  constructor(private uiService: UiService, private siteService: SiteService, private wsService: WsService) {
    this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.retreiveSavCapability(); });
    this.latestComMessageSubscription = this.wsService.latestComMessageSubject.subscribe((messages: string[]) => {
      this.tcpMessages += messages.join("\r\n");
      if (messages.length > 0) this.tcpMessages += "\r\n";
      if (this.tcpMessagesCtrl != null) {
        this.tcpMessagesCtrl.nativeElement.scrollTop = this.tcpMessagesCtrl.nativeElement.scrollHeight;
      }
    });
  }

  retreiveSavCapability() {
    if (this.siteService.selectedUnit != null) {
      this.savCapability = this.siteService.selectedUnit.getCapability<UnitSavCapability>(CapabilityType.UnitSav);
    }
    else {
      this.savCapability = undefined;
    }

  }
  ngOnDestroy() {
    this.siteStateSubscription.unsubscribe();
    this.latestComMessageSubscription.unsubscribe();
    clearInterval(this.tcpMessageTimer);
  }
  onPollingStateChange(evt: MatCheckboxChange) {
    if (this.savCapability != null) this.savCapability.setPollingState(evt.checked);
  }
  ngOnInit(): void {
    this.retreiveSavCapability();
    this.tcpMessageTimer = setInterval(() => { if (this.savCapability != null) this.savCapability.getLatestComMessage() }, 500);
  }

  onCloseClick() {
    this.uiService.hidePanelSav();

  }
  onSendClick() {
    if (this.savCapability != null) {
      this.savCapability.executeCommand(this.tcpMessageToSend);
    }
  }

}
