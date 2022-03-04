import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { DoubleValueCapability } from '../../materials/capabilities/double-value-capability';
import { DoubleValueType } from '../../materials/capabilities/double-value-type';

@Component({
  selector: 'app-async-slider',
  templateUrl: './async-slider.component.html',
  styleUrls: ['./async-slider.component.scss']
})
export class AsyncSliderComponent implements OnInit {

  @Input() capability: DoubleValueCapability;
  @Input() displayName: string = "";
 
  constructor() {
    this.capability = new DoubleValueCapability({
      capabilityType: CapabilityType.DoubleValue,
      displayName: "",
      doubleValueType: DoubleValueType.BlackLevel,
      id: '',
      maxValue: 0,
      minValue: 0,
      type:""
    });
  }

  ngOnInit(): void {
  }

 
}
