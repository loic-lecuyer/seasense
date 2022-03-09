import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStream } from '../../models/stream';
import { SiteService } from '../../services/site.service';
import { Material } from '../../materials/material';
import { MaterialType } from '../../materials/material-type';
import { Camera } from '../../materials/camera';
import { UiService } from '../../services/ui.service';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { CameraZoomAbsolutePositionCapability } from '../../materials/capabilities/camera/camera-zoom-absolute-position-capability';
import { TurretAbsolutePositionCapability } from '../../materials/capabilities/turret/turret-absolute-position-capability';
import { TurretMoveAbsoluteCapability } from '../../materials/capabilities/turret/turret-move-absolute-capability';


@Component({
  selector: 'app-hud-stream',
  templateUrl: './hud-stream.component.html',
  styleUrls: ['./hud-stream.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudStreamComponent implements OnInit, OnDestroy {


  @Input() showMagnifier: boolean = false;
  public isMouseOnImage: boolean = false;
  public mousePan: number = 0;
  public mouseTilt: number = 0;
  public mainStream: IStream | undefined = undefined;
  private streams: IStream[] = [];
  private unitSelectedSubscription: Subscription;
  private cameraSelectedSubscription: Subscription;
  private showPipZoomSubscription: Subscription;
  constructor(private siteService: SiteService, private el: ElementRef, private renderer: Renderer2, private uiService: UiService) {
    this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateStreamList(); });
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateStreamList(); });
    this.showPipZoomSubscription = this.uiService.showPipZoomSubject.subscribe((value: boolean) => { this.showMagnifier = value; })

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
            //url: camera.streamUrl,
            url: baseStreamUrl +  value.id,
            displayHeight: 0,
            displayWidth: 0,
            streamWidth: camera.streamWidth,
            streamHeight: camera.streamHeight,
            displayLeft: 0,
            displayTop:0
          };
          console.log("Add stream info ", stream);
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
    
      this.uiService.displayStreamWidth = this.mainStream.displayWidth;
      this.uiService.displayStreamHeight = this.mainStream.displayHeight;
    }
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if (this.mainStream == null) return;
    if (this.siteService.selectedCamera == null) return;
    if (this.siteService.selectedUnit == null) return;
    let turret: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.Turret);
    if (turret == undefined) return;
    let capPanTiltPos: TurretAbsolutePositionCapability | undefined = turret.getCapability<TurretAbsolutePositionCapability>(CapabilityType.TurretAbsolutePosition);
    if (capPanTiltPos == undefined) return;
    let capZoomPos: CameraZoomAbsolutePositionCapability | undefined = this.siteService.selectedCamera.getCapability<CameraZoomAbsolutePositionCapability>(CapabilityType.CameraZoomAbsolutePosition);
    if (capZoomPos == undefined) return;
    // get mouse position from document
    let mousePageX: number = e.pageX;
    let mousePageY: number = e.pageY;   
    let localX = mousePageX;
    // Remove Header
    let localY = mousePageY - 64;
    if (localX >= this.mainStream.displayLeft &&
      localX <= (this.mainStream.displayLeft + this.mainStream.displayWidth) &&
      localY >= this.mainStream.displayTop &&
      localY <= (this.mainStream.displayTop + this.mainStream.displayHeight)) {
      let ratioX = ((localX - this.mainStream.displayLeft) / this.mainStream.displayWidth) - 0.5;
      let ratioY = ((localY - this.mainStream.displayTop) / this.mainStream.displayHeight) - 0.5;
      let verticalFieldOfView = (capZoomPos.horizontalFieldOfView / this.siteService.selectedCamera.streamWidth) * this.siteService.selectedCamera.streamHeight;
      //console.log("horizontalFieldOfView " + capZoomPos.horizontalFieldOfView);
      //console.log("verticalFieldOfView " + verticalFieldOfView);
      let offsetPan = ratioX * capZoomPos.horizontalFieldOfView;
      let offsetTilt = ratioY * verticalFieldOfView;
      offsetTilt = offsetTilt * -1;
      //console.log("offsetPan " + offsetPan);
      //console.log("offsetTilt " + offsetTilt);
      this.mousePan = capPanTiltPos.pan + offsetPan;
      this.mouseTilt = capPanTiltPos.tilt + offsetTilt;
      if (this.mousePan < 0) this.mousePan += 360;
      this.mousePan = this.mousePan % 360;
      this.isMouseOnImage = true;
      this.uiService.mousePan = this.mousePan;
      this.uiService.mouseTilt = this.mouseTilt;
      //console.log("pan " + pan);
      //console.log("tilt " + tilt);


    }
    else {
      this.isMouseOnImage = false;
      this.uiService.mousePan = null;
      this.uiService.mouseTilt = null;
    }


  }
  @HostListener('document:click', ['$event'])
  onImageClick() {
    if (this.mainStream == null) return;
    if (this.siteService.selectedCamera == null) return;
    if (this.siteService.selectedUnit == null) return;
    if (this.isMouseOnImage == false) return;
    
    let turret: Material | undefined = this.siteService.selectedUnit.getMaterial(MaterialType.Turret);
    if (turret == undefined) return;
    let capMoveAbosulte: TurretMoveAbsoluteCapability | undefined = turret.getCapability<TurretMoveAbsoluteCapability>(CapabilityType.TurretMoveAbsolute);
    if (capMoveAbosulte == undefined) return;
    capMoveAbosulte.move(this.mousePan, this.mouseTilt);

    
  }

  ngOnDestroy() {
    this.unitSelectedSubscription.unsubscribe();
    this.cameraSelectedSubscription.unsubscribe();
    this.showPipZoomSubscription.unsubscribe();

  }
  ngOnInit(): void {
    this.updateStreamList();
  }

}
