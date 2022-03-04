import { Component, Input, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CapabilityType } from '../../materials/capabilities/capability-type';
import { SwitchValueCapability } from '../../materials/capabilities/switch-value-capability';
import { SwitchValueType } from '../../materials/capabilities/switch-value-type';
import { SwitchValue } from '../../models/switch-value';

@Component({
  selector: 'app-async-toggle-group',
  templateUrl: './async-toggle-group.component.html',
  styleUrls: ['./async-toggle-group.component.scss']
})
export class AsyncToggleGroupComponent implements OnInit {


  public currentValue: string = "";
  @Input() capability: SwitchValueCapability;
  @Input() displayName: string = "";
  constructor() {
    this.capability = new SwitchValueCapability({
      capabilityType: CapabilityType.SwitchValue,
      displayName: "",
      id: "",
      switchValueType: SwitchValueType.ExposureTimeMode,
      type: "",
      values: []

    });

  }

  onToggleChnage(evt: MatButtonToggleChange) {
    let finded: SwitchValue | undefined = this.capability.values.find((val: SwitchValue) => { return val.value === evt.value });
    if (finded != null) {
      this.capability.editValue = finded;
    }

  }

  ngOnInit(): void {
    this.currentValue = this.capability.value.value;
    
  }

}
