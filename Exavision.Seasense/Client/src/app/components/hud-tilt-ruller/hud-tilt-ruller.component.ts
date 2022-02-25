import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hud-tilt-ruller',
  templateUrl: './hud-tilt-ruller.component.html',
  styleUrls: ['./hud-tilt-ruller.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudTiltRullerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
