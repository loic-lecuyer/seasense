import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as nipplejs from 'nipplejs';
@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss']
})
export class StickComponent implements  AfterViewInit{
  @ViewChild("nipplejshost") nipplejshost: any = null;
  private nippleControl: any;
  constructor() { }

  ngAfterViewInit(): void {
    this.nippleControl = nipplejs.create({
      zone: this.nipplejshost.nativeElement,
      mode: 'static',
      position: { left: '0px', top: '0px' },     
      color: 'red',
      restOpacity: 0.8
    });
  }

}
