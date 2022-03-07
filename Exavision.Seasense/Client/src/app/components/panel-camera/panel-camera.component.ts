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
  public contrastCapability: DoubleValueCapability | undefined = undefined;
  public whiteBalanceModeCapability: SwitchValueCapability | undefined = undefined;
  public whiteBalanceCapability: DoubleValueCapability | undefined = undefined;
  public luminosityCapability: DoubleValueCapability | undefined = undefined;
  public meteoLocationCapability: SwitchValueCapability | undefined = undefined;
  public meteoTimeCapability: SwitchValueCapability | undefined = undefined;
  public meteoWeatherCapability: SwitchValueCapability | undefined = undefined;
  public shutterModeCapability: SwitchValueCapability | undefined = undefined;
  public reticuleModeCapability: SwitchValueCapability | undefined = undefined;
  public colorModeCapability: SwitchValueCapability | undefined = undefined;
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

      this.contrastCapability = this.camera.getValueCapability(DoubleValueType.Contrast);
      if (this.contrastCapability != null) this.contrastCapability.beginEdit();


      this.whiteBalanceCapability = this.camera.getValueCapability(DoubleValueType.WhiteBalance);
      if (this.whiteBalanceCapability != null) this.whiteBalanceCapability.beginEdit();


      this.whiteBalanceModeCapability = this.camera.getSwitchCapability(SwitchValueType.WhiteBalanceMode);
      if (this.whiteBalanceModeCapability != null) this.whiteBalanceModeCapability.beginEdit();

      this.luminosityCapability = this.camera.getValueCapability(DoubleValueType.Luminosity);
      if (this.luminosityCapability != null) this.luminosityCapability.beginEdit();


      this.meteoLocationCapability = this.camera.getSwitchCapability(SwitchValueType.MeteoLocation);
      this.meteoLocationCapability?.beginEdit();

      this.meteoTimeCapability = this.camera.getSwitchCapability(SwitchValueType.MeteoTime);
      this.meteoTimeCapability?.beginEdit();


      this.meteoWeatherCapability = this.camera.getSwitchCapability(SwitchValueType.MeteoWeather);
      this.meteoWeatherCapability?.beginEdit();

      this.reticuleModeCapability = this.camera.getSwitchCapability(SwitchValueType.ReticuleMode);
      this.reticuleModeCapability?.beginEdit();
      if (this.reticuleModeCapability != null) {
        console.log("reticuleMode values ", this.reticuleModeCapability.values);
      }

      this.shutterModeCapability = this.camera.getSwitchCapability(SwitchValueType.ShutterMode);
      this.shutterModeCapability?.beginEdit();

      this.colorModeCapability = this.camera.getSwitchCapability(SwitchValueType.ColorMode);
      this.colorModeCapability?.beginEdit();



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
      this.meteoLocationCapability = undefined;
      this.meteoTimeCapability = undefined;
      this.meteoWeatherCapability = undefined;
      this.reticuleModeCapability = undefined;
      this.shutterModeCapability = undefined;
      this.colorModeCapability = undefined;
      this.contrastCapability = undefined;
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
