import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStream } from '../../models/stream';
import { SiteService } from '../../services/site.service';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { Camera } from '../../materials/camera';


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
  constructor(private siteService: SiteService, private el: ElementRef, private renderer: Renderer2) {
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
          let camera: Camera = <Camera>value;
          let isSelectedCamera = value.id === this.siteService.selectedCamera?.id;
          let stream: IStream = {
            displayName: value.displayName,
            isMainStream: isSelectedCamera,
            materialId: value.id,
            url: baseStreamUrl + "/" + value.id,
            displayHeight: 0,
            displayWidth: 0,
            streamWidth: camera.streamWidth,
            streamHeight: camera.streamHeight,
            displayLeft: 0,
            displayTop:0
          };
          if (isSelectedCamera) {
            this.mainStream = stream;
          }
          this.streams.push(stream);

        } 
      });
    }
    this.setStreamSize();
  }

  @HostListener('window:resize', ['$event'])
  onResized(evt: any) {    
    this.setStreamSize();
  }
  setStreamSize() {
    let style = getComputedStyle(this.el.nativeElement);
    let displayWidth = parseFloat(style.width.replace('px', ''));
    let displayHeight = parseFloat(style.height.replace('px', ''));
    if (this.mainStream != null) {
      let ratioStream: number = this.mainStream.streamWidth / this.mainStream.streamHeight;
      let computedHeight = displayWidth / ratioStream;
      if (computedHeight > displayHeight) {
        let computedWidth = displayHeight * ratioStream;
        let left: number = (displayWidth - computedWidth) / 2;
        this.mainStream.displayTop = 0;
        this.mainStream.displayLeft = left;
        this.mainStream.displayWidth = computedWidth;
        this.mainStream.displayHeight = displayHeight;
      }
      else {
        let top: number = (displayHeight - computedHeight) / 2;
        this.mainStream.displayTop = top;
        this.mainStream.displayLeft = 0;
        this.mainStream.displayWidth = displayWidth;
        this.mainStream.displayHeight = computedHeight;
      }
    
     
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
