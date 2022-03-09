import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LogoutResponse } from '../../api/http/logout-response';
import { Site } from '../../materials/site';
import { Unit } from '../../materials/unit';
import { HttpService } from '../../services/http.service';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';
import { UserService } from '../../services/user.service';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private siteLoadedSubscription: Subscription;
  public units: Unit[] = [];
  public selectedUnitId: string | undefined = undefined;
  constructor(public userService: UserService, public httpService: HttpService, public router: Router, private siteService: SiteService, private wsService: WsService, private uiService: UiService) {
    this.siteLoadedSubscription = this.siteService.siteLoadedSubject.subscribe((site: Site | undefined) => {
      if (site == null) this.units = [];
      else this.units = site.units;
      this.selectedUnitId = this.siteService.selectedUnit?.id;
    });
    
  }
  onCameraButtonClick() {
    this.uiService.showPanelCamera();
  }
  onConfigurationButtonClick() {
    this.router.navigate(['/configuration'])
  }
  ngOnDestroy() {
    this.siteLoadedSubscription.unsubscribe()
  }

  ngOnInit(): void {

  }
  onHomeClick() {
    this.router.navigate(['/home']);
  }
  onSelectedUnitChange(unitId: string) {
    this.siteService.selectUnitById(unitId);    
  }
  onLogoutClick() {
    this.httpService.logout().subscribe({
      next: (response: LogoutResponse) => {
        this.wsService.stop();
        this.userService.clearToken();
        this.userService.clearUser();
        this.router.navigate(['/login'])
      },
      error: (err: HttpErrorResponse) => {
        this.userService.clearToken();
        this.userService.clearUser();
        this.router.navigate(['/login'])
      },
    });  
  }
  onFullScreenClick() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  
  }
  onSwitchLeftToRightclick() {
    this.uiService.switchLeftToRight();
  }
  onShowMediaClick() {
    this.uiService.showPanelMedia();
  }

  onShowSavClick() {
    this.uiService.showPanelSav();
  }
}
