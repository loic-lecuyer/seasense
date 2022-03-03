import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Camera } from '../../materials/camera';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';
import { DoubleValueType } from '../../materials/capabilities/double-value-type';
import { DoubleValueCapability } from '../../materials/capabilities/double-value-capability';

@Component({
  selector: 'app-panel-camera',
  templateUrl: './panel-camera.component.html',
  styleUrls: ['./panel-camera.component.scss']
})
export class PanelCameraComponent implements OnInit, OnDestroy {

  public camera: Camera | undefined = undefined;
  private cameraSelectedSubscription: Subscription;
  public qualityCapability: DoubleValueCapability | undefined = undefined;

  constructor(private uiService: UiService, private siteService: SiteService) {

    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => {
      this.camera = this.siteService.selectedCamera;
      this.updateVisibilityFlags();
      console.log("Current camera ", this.camera);
    });
  }
  updateVisibilityFlags() {
    if (this.camera != null) {
      this.qualityCapability = this.camera.getValueCapability(DoubleValueType.Quality);     
    }
    else {
      this.qualityCapability = undefined;
    }
  }


  onCloseClick() {
    this.uiService.hidePanelCamera();
  }
  ngOnInit(): void {
    this.camera = this.siteService.selectedCamera;
    console.log("Current camera ", this.camera);
  }

  ngOnDestroy() {
    this.cameraSelectedSubscription.unsubscribe();
  }

}
