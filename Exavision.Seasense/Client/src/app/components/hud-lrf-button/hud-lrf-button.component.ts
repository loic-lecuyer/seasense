import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hud-lrf-button',
  templateUrl: './hud-lrf-button.component.html',
  styleUrls: ['./hud-lrf-button.component.scss']
})
export class HudLrfButtonComponent implements OnInit {
  private isMouseDown: boolean = false;
  public isContinuousMode: boolean = false;
  private continuousTriggerTimer: any;
  @Output() shoot: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  onMouseDown() {
    this.isMouseDown = true;
    this.continuousTriggerTimer = setTimeout(() => {
      this.isContinuousMode = true;
      console.log("continuous mode enabled");
    },2000);
    
   
  }
  onMouseUp() {
    if (this.isMouseDown === true) {
      this.isMouseDown = false;
      clearTimeout(this.continuousTriggerTimer);
    }
  }

  onMouseClick() {
    this.isContinuousMode = false;
    console.log("continuous mode disabled");
  }

  @HostListener('document:pointerup', ['$event'])
  onDocumentPointerUp(evt: any) {
    if (this.isMouseDown === true) {
      this.isMouseDown = false;
      clearTimeout(this.continuousTriggerTimer);
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onDocumentMouse(evt: any) {
    if (this.isMouseDown === true) {
      this.isMouseDown = false;
      clearTimeout(this.continuousTriggerTimer);
      
    }
  }
}
