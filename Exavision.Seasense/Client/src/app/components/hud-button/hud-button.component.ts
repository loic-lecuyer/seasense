import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hud-button',
  templateUrl: './hud-button.component.html',
  styleUrls: ['./hud-button.component.scss']
})
export class HudButtonComponent implements OnInit {

  @Output() buttonUp: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() buttonDown: EventEmitter<boolean> = new EventEmitter<boolean>();
  private isMouseDown: boolean = false;
  constructor() { }
  onMouseDown() {
    this.isMouseDown = true;
    this.buttonDown.emit(true);
  }
  onMouseUp() {
    if (this.isMouseDown === true) {
      this.isMouseDown = false;
      this.buttonUp.emit(true);
    }
  }
  ngOnInit(): void {
  }
  @HostListener('document:pointerup', ['$event'])
  onDocumentPointerUp(evt: any) {
    if (this.isMouseDown === true) {
      this.isMouseDown = false;
      this.buttonUp.emit(true);
    }

  }

  @HostListener('document:mouseup', ['$event'])
  onDocumentMouse(evt: any) {
    if (this.isMouseDown === true) {
      this.isMouseDown = false;
      this.buttonUp.emit(true);
    }
  }
}
