import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-panel-sav',
  templateUrl: './panel-sav.component.html',
  styleUrls: ['./panel-sav.component.scss']
})
export class PanelSavComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.uiService.hidePanelSav();

  }

}
