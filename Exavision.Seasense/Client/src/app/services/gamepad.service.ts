import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vector2 }  from '../models/vector2';
@Injectable({
  providedIn: 'root'
})
export class GamepadService {

  private initialized: boolean = false;
  public gamepadAxisSubject: Subject<Vector2> = new Subject<Vector2>();
  
  private gamePad: Gamepad | null = null;
  private lastX: number = 0;
  private lastY: number = 0;
  constructor() {
   
  }

  public initialize() {
    if (this.initialized == false) {
      window.addEventListener("gamepadconnected", (e) => {
        this.gamePad = e.gamepad;
      });
      window.addEventListener("gamepaddisconnected",  (e)=> {      
          this.gamePad = null;
      });
      setInterval(() => { this.gamePadLoop(); }, 100);
      this.initialized = true;
    }

  }
  gamePadLoop() {
    let index = 0;
    let pads: (Gamepad | null)[] = navigator.getGamepads();
    let pad = pads.find((val: Gamepad | null) => { return val != null });    
    if (pad == null) return;
    let x = pad.axes[0];
    let y = pad.axes[1];
    let hasMove: boolean = false;
    if (Math.abs(x) > 0.1 ) {    
      this.lastX = x;     
      hasMove = true;
    }
    else {
      if (this.lastX != 0 ) {
       
        this.lastX = 0;      
        hasMove = true;
      }
    }


    if ( Math.abs(y) > 0.1) {  
      this.lastY = y;
      hasMove = true;
    }
    else {
      if  (this.lastY != 0) {             
        this.lastY = 0;
        hasMove = true;
      }
    }
    if (hasMove) {
      this.gamepadAxisSubject.next({
        x: this.lastX,
        y: this.lastY
      });     
    }
   
    
  }
}
