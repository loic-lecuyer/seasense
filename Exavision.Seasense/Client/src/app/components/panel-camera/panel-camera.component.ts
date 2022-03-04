import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Camera } from '../../materials/camera';
import { SiteService } from '../../services/site.service';
import { UiService } from '../../services/ui.service';
import { DoubleValueType } from '../../materials/capabilities/double-value-type';
import { DoubleValueCapability } from '../../materials/capabilities/double-value-capability';
import { SwitchValueCapability } from '../../materials/capabilities/switch-value-capability';
import { SwitchValueType } from '../../materials/capabilities/switch-value-type';

@Component({
  selector: 'app-panel-camera',
  templateUrl: './panel-camera.component.html',
  styleUrls: ['./panel-camera.component.scss']
})
export class PanelCameraComponent implements OnInit, OnDestroy {

  public camera: Camera | undefined = undefined;
  private cameraSelectedSubscription: Subscription;
  public qualityCapability: DoubleValueCapability | undefined = undefined;
  public blackLevelCapability: DoubleValueCapability | undefined = undefined;
  public exposureTimeModeCapability: SwitchValueCapability | undefined = undefined;
  public exposureTimeCapability: DoubleValueCapability | undefined = undefined;
  public gainModeCapability: SwitchValueCapability | undefined = undefined;
  public gainCapability: DoubleValueCapability | undefined = undefined;
  public gammaCapability: DoubleValueCapability | undefined = undefined;
  public whiteBalanceModeCapability: SwitchValueCapability | undefined = undefined;
  public whiteBalanceCapability: DoubleValueCapability | undefined = undefined;
  public luminosityCapability: DoubleValueCapability | undefined = undefined;
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
      if (this.qualityCapability != null) this.qualityCapability.beginEdit();

      this.blackLevelCapability = this.camera.getValueCapability(DoubleValueType.BlackLevel);
      if (this.blackLevelCapability != null) this.blackLevelCapability.beginEdit();

      this.exposureTimeModeCapability = this.camera.getSwitchCapability(SwitchValueType.ExposureTimeMode);
      if (this.exposureTimeModeCapability != null) this.exposureTimeModeCapability.beginEdit();

      this.exposureTimeCapability = this.camera.getValueCapability(DoubleValueType.ExposureTime);
      if (this.exposureTimeCapability != null) this.exposureTimeCapability.beginEdit();

      this.gainModeCapability = this.camera.getSwitchCapability(SwitchValueType.GainMode);
      if (this.gainModeCapability != null) this.gainModeCapability.beginEdit();

      this.gainCapability = this.camera.getValueCapability(DoubleValueType.Gain);
      if (this.gainCapability != null) this.gainCapability.beginEdit();

      this.gammaCapability = this.camera.getValueCapability(DoubleValueType.Gamma);
      if (this.gammaCapability != null) this.gammaCapability.beginEdit();

      this.whiteBalanceCapability = this.camera.getValueCapability(DoubleValueType.WhiteBalance);
      if (this.whiteBalanceCapability != null) this.whiteBalanceCapability.beginEdit();


      this.whiteBalanceModeCapability = this.camera.getSwitchCapability(SwitchValueType.WhiteBalanceMode);
      if (this.whiteBalanceModeCapability != null) this.whiteBalanceModeCapability.beginEdit();

      this.luminosityCapability = this.camera.getValueCapability(DoubleValueType.Luminosity);
      if (this.luminosityCapability != null) this.luminosityCapability.beginEdit();


    }
    else {
      this.gammaCapability = undefined;
      this.whiteBalanceCapability = undefined;
      this.whiteBalanceModeCapability = undefined;
      this.qualityCapability = undefined;
      this.blackLevelCapability = undefined;
      this.exposureTimeCapability = undefined;
      this.gainModeCapability = undefined;
      this.gainCapability = undefined;
      this.luminosityCapability = undefined;
    }
  }


  onCloseClick() {
    this.uiService.hidePanelCamera();
  }
  ngOnInit(): void {
    this.camera = this.siteService.selectedCamera;
    this.updateVisibilityFlags();
    console.log("Current camera ", this.camera);
  }

  ngOnDestroy() {
    this.cameraSelectedSubscription.unsubscribe();
  }

}
