import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hud-stream',
  templateUrl: './hud-stream.component.html',
  styleUrls: ['./hud-stream.component.scss'],
  host: { 'class': 'hud-layer' }
})
export class HudStreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
