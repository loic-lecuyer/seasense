import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaFile } from '../../models/media-file';
import { UiService } from '../../services/ui.service';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'app-panel-media',
  templateUrl: './panel-media.component.html',
  styleUrls: ['./panel-media.component.scss']
})
export class PanelMediaComponent implements OnInit, OnDestroy {
  public files: MediaFile[] = [];
  displayedColumns: string[] = [ 'name','size','date','type','download','open','delete'];
  private mediaFilesSubscription: Subscription;
  @ViewChild('refLink') refLink: ElementRef | null = null;
    mediaChangeSubscription: Subscription;
  constructor(private uiService: UiService, private wsService: WsService) {
    this.mediaChangeSubscription= this.uiService.mediaChangeSubject.subscribe(() => {
      this.wsService.getMediaList();
    });

    this.mediaFilesSubscription = this.wsService.mediaFilesSubject.subscribe((files: MediaFile[]) => {
      this.files = [];
      this.files = this.files.concat(files);
    });

  
  }
  ngOnDestroy() {
    this.mediaFilesSubscription.unsubscribe();
    this.mediaChangeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.wsService.getMediaList();

  }
  onCloseClick() {
    this.uiService.hidePanelMedia();
  }
  getComputedSize(sizeIOnBytes: number): string {
    if (sizeIOnBytes > 1073741824) {
      return (sizeIOnBytes / 1073741824).toFixed(2) + " GB";
    }
    else if (sizeIOnBytes > 1048576) {
      return (sizeIOnBytes / 1048576).toFixed(2) + " MB";
    }
    else if (sizeIOnBytes > 1024) {
      return (sizeIOnBytes / 1024).toFixed(2) + " KB";
    }
    return sizeIOnBytes + " Bytes";
  }
  getComputedType(url: string) {
    if (url.endsWith("jpg")) return "Image";
    if (url.endsWith("png")) return "Image";
    if (url.endsWith("bmp")) return "Image";
    if (url.endsWith("avi")) return "Video";
    if (url.endsWith("mpg")) return "Video";
    if (url.endsWith("mp4")) return "Video";
    if (url.endsWith("mpeg")) return "Video";
    return "Undefined";
  }
  padTo2Digits(num : number) {
  return num.toString().padStart(2, '0');
}

  formatDate(val: string) {
    let date: Date = new Date(val);
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/') + ' ' + date.toTimeString().split(' ')[0];
  }
  onDownloadClick(file: MediaFile) {
    if (this.refLink == null) return;
    this.refLink.nativeElement.setAttribute('download', file.name);
    this.refLink.nativeElement.href = file.url;
    console.log("Download url " + file.url);
    this.refLink.nativeElement.click();
  }
  onOpenInNewTabClick(file: MediaFile) {
    console.log("Open url " + file.url);
    window.open(file.url, "_blank");

  }
  onDeleteClick(file: MediaFile) {
    this.wsService.deleteMedia(file.name);
    this.uiService.notifyMediaChange(500);
  }
}
