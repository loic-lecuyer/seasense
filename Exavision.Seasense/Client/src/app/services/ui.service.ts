import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  

  public showPipZoomSubject: Subject<boolean> = new Subject<boolean>();
  public mousePan: number | null = null;
  public mouseTilt: number | null = null;
  public displayStreamWidth: number | null = null;
  public displayStreamHeight: number | null = null;
  public showPanelCameraSubject: Subject<boolean> = new Subject<boolean>();
  public showPanelMediaSubject: Subject<boolean> = new Subject<boolean>();
  public showPanelSavSubject: Subject<boolean> = new Subject<boolean>();
  public isLeftTorightSubject: Subject<boolean> = new Subject<boolean>();
  public mediaChangeSubject: Subject<boolean> = new Subject<boolean>();
  private isPipZoomVisible: boolean = false;
  private isPanelCameraVisible: boolean = false;
  private isPanelMediaVisible: boolean = false;
  private isPanelSavVisible: boolean = false;
  private isleftToRight: boolean = true;
  constructor() { }

  switchLeftToRight() {
    this.isleftToRight = !this.isleftToRight;
    this.isLeftTorightSubject.next(this.isleftToRight);
  }

  showHidePipZoom() {
    this.isPipZoomVisible = !this.isPipZoomVisible;
    this.showPipZoomSubject.next(this.isPipZoomVisible);
  }

  showPanelCamera() {
    this.hidePanelMedia();
    this.hidePanelSav();
    this.isPanelCameraVisible = true;
    this.showPanelCameraSubject.next(this.isPanelCameraVisible);
  }
  hidePanelCamera() {
    this.isPanelCameraVisible = false;
    this.showPanelCameraSubject.next(this.isPanelCameraVisible);
  }

  hidePanelMedia() {
    this.isPanelMediaVisible = false;
    this.showPanelMediaSubject.next(this.isPanelMediaVisible);
  }
  showPanelMedia() {
    this.hidePanelSav();
    this.hidePanelCamera();
    this.isPanelMediaVisible = true;
    this.showPanelMediaSubject.next(this.isPanelMediaVisible);
  }
  hidePanelSav() {
    this.isPanelSavVisible = false;
    this.showPanelSavSubject.next(this.isPanelSavVisible);
  }
  showPanelSav() {
    this.hidePanelCamera ();
    this.hidePanelMedia ();
    this.isPanelSavVisible = true;
    this.showPanelSavSubject.next(this.isPanelSavVisible);
  }
  notifyMediaChange(delay: number) {    
    setTimeout(() => {
      this.mediaChangeSubject.next(true);
    }, delay);
  }

}
