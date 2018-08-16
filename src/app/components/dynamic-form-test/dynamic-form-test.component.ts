import { Component, OnInit } from '@angular/core';
import { AnyAppDynamicControl, ANYAPP_FIELD_TYPE } from '@anyapp/components';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aa-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.scss']
})
export class DynamicFormTestComponent implements OnInit {
  selectedTab: string;
  
  output: string;

  controls: AnyAppDynamicControl[] = [
    new AnyAppDynamicControl('controlTest1', 'input', 'initial value 123', false, 'A simple input with an initial value', 'Input1', null),
    new AnyAppDynamicControl('controlTest2', 'input', '', true, 'A required input', 'Input2', null),
    new AnyAppDynamicControl('controlTest3', 'input', 'Something else', true, 'A required input with an initial value', 'Input3', null),
    new AnyAppDynamicControl('controlTest4', 'checkbox', true, false, 'A checkbox', null, 'Checkbox1')
  ];

  data: any;
  
  constructor() { }

  ngOnInit() {
  }

  setValues() {
    this.data = {
      controlTest1: 'updated value',
      controlTest3: 'after 2500ms updated'
    }
  }

  addControl(type: ANYAPP_FIELD_TYPE, required: boolean) {
    let nr = this.controls.length+1;
    let label = type == 'checkbox' ? 'Some label for ctrl' + nr : null;
    let ph = type == 'checkbox' ? null : 'Some placeholder for ctrl' + nr;

    this.controls.push(new AnyAppDynamicControl('controlTest' + nr, type, '', required, 'Some hint for control' + nr, ph, label));
    this.controls = this.controls;
  }

  formSubmit(event: FormGroup) {
    this.output = JSON.stringify(event.value);
  }

}
