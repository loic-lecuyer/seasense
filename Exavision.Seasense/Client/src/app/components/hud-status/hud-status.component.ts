import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hud-status',
  templateUrl: './hud-status.component.html',
  styleUrls: ['./hud-status.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
