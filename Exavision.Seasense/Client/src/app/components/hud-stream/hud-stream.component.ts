import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStream } from '../../models/stream';
import { SiteService } from '../../services/site.service';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';


@Component({
  selector: 'app-hud-stream',
  templateUrl: './hud-stream.component.html',
  styleUrls: ['./hud-stream.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudStreamComponent implements OnInit, OnDestroy {

  public mainStream: IStream | undefined = undefined;
  private streams: IStream[] = [];
  private unitSelectedSubscription: Subscription;
  private cameraSelectedSubscription: Subscription;
  constructor(private siteService: SiteService) {
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateStreamList(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateStreamList(); });
  }
  updateStreamList() {
    this.streams = [];
    if (this.siteService.selectedUnit != null) {
      let baseStreamUrl: string = "";
      if (window.location.protocol === "https:") {
        baseStreamUrl += "https://";
      }
      else {
        baseStreamUrl += "http://";
      }

      baseStreamUrl += window.location.host + ":" + window.location.port + "/stream/";
      this.siteService.selectedUnit.materials.forEach((value: Material) => {

        if (value.materialType == MaterialType.DayCamera || value.materialType == MaterialType.ThermalCamera) {
          let isSelectedCamera = value.id === this.siteService.selectedCamera?.id;
          let stream: IStream = {
            displayName: value.displayName,
            isMainStream: isSelectedCamera,
            materialId: value.id,
            url: baseStreamUrl + "/" + value.id
          };
          if (isSelectedCamera) {
            this.mainStream = stream;
          }
          this.streams.push(stream);

        } 
      });
    }
  }

  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();

  }
  ngOnInit(): void {
    this.updateStreamList();
  }

}
