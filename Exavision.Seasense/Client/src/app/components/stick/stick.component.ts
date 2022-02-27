import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as nipplejs from 'nipplejs';
import { JoystickManager } from 'nipplejs';
@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss']
})
export class StickComponent implements AfterViewInit, OnInit, OnChanges, AfterContentInit{
  @ViewChild("nipplejshost") nipplejshost: any = null;
  private nippleControl: any;
  constructor(private cdref: ChangeDetectorRef) { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
   
  }
  ngAfterContentInit(): void {
  
  }
  ngAfterViewInit(): void {
    // NippleJs creation is deffered.
    // without deffred instanciation stick initialization is corrupted.
    setTimeout(() => {
      this.nippleControl = nipplejs.create({
        zone: this.nipplejshost.nativeElement,
        mode: 'static',
        position: { left: '80px', top: '80px' },
        color: 'red',
        restOpacity: 0.8
      });
     }, 500);
  
  }

}
