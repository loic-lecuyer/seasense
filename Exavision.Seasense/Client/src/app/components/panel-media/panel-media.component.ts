import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-panel-media',
  templateUrl: './panel-media.component.html',
  styleUrls: ['./panel-media.component.scss']
})
export class PanelMediaComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }
  onCloseClick() {
    this.uiService.hidePanelMedia();
  }
}
