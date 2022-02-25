import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hud-compass',
  templateUrl: './hud-compass.component.html',
  styleUrls: ['./hud-compass.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudCompassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
