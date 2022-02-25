import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hud-ui',
  templateUrl: './hud-ui.component.html',
  styleUrls: ['./hud-ui.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudUiComponent implements OnInit {
  public isLeftToRight: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
