import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hud-check',
  templateUrl: './hud-check.component.html',
  styleUrls: ['./hud-check.component.scss']
})
export class HudCheckComponent implements OnInit {
  @Input() isChecked: boolean = false;

  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }
  onMouseClick() {  
    this.checkChange.emit(!this.isChecked);
  }

}
