import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetSettingResponse } from '../../api/http/get-setting-response';

import { HttpService } from '../../services/http.service';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public isPanelCameraVisible: boolean = false;
  private showPanelCameraSubscription: Subscription;
  constructor(private httpService: HttpService, private siteService: SiteService, private uiService: UiService) {
    this.showPanelCameraSubscription =  this.uiService.showPanelCameraSubject.subscribe((value: boolean) => { this.isPanelCameraVisible = value; });
  }

  ngOnDestroy() {
    this.showPanelCameraSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.httpService.getSetting().subscribe({
      next: (response: GetSettingResponse) => {
        this.siteService.createSite(response);        
      },
      error: (err: HttpErrorResponse) => {        
      },
    });  
  }
 
}
