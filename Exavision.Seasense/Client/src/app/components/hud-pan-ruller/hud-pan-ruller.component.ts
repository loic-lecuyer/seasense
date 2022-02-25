import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hud-pan-ruller',
  templateUrl: './hud-pan-ruller.component.html',
  styleUrls: ['./hud-pan-ruller.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudPanRullerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
