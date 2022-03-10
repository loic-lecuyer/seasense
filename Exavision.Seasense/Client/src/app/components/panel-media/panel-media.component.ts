import { Component, OnDestroy, OnInit } from '@angular/core';
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
  private mediaFilesSubscription: Subscription;
  constructor(private uiService: UiService, private wsService: WsService) {


    this.mediaFilesSubscription = this.wsService.mediaFilesSubject.subscribe((files: MediaFile[]) => {
      this.files = [];
      this.files = this.files.concat(files);
    });
  }
  ngOnDestroy() {
    this.mediaFilesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.wsService.getMediaList();

  }
  onCloseClick() {
    this.uiService.hidePanelMedia();
  }
}
