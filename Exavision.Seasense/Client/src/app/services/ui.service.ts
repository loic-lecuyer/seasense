import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public showPipZoomSubject: Subject<boolean> = new Subject<boolean>();

  public showPanelCameraSubject: Subject<boolean> = new Subject<boolean>();
  private isPipZoomVisible: boolean = false;
  private isPanelCameraVisible: boolean = false;

  constructor() { }


  showHidePipZoom() {
    this.isPipZoomVisible = !this.isPipZoomVisible;
    this.showPipZoomSubject.next(this.isPipZoomVisible);
  }

  showPanelCamera() {
    this.isPanelCameraVisible = true;
    this.showPanelCameraSubject.next(this.isPanelCameraVisible);
  }
  hidePanelCamera() {
    this.isPanelCameraVisible = false;
    this.showPanelCameraSubject.next(this.isPanelCameraVisible);
  }

 
}
