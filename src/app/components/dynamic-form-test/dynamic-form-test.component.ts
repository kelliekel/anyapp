import { Component, OnInit } from '@angular/core';
import { AnyAppControl, ANYAPP_FIELD_TYPE } from '@anyapp/components';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aa-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.scss']
})
export class DynamicFormTestComponent implements OnInit {
  selectedTab: string;
  
  output: string;

  controls: AnyAppControl[] = [
    new AnyAppControl('controlTest1', 'initial value 123', 'input'),
    new AnyAppControl('controlTest2', '', 'input'),
    new AnyAppControl('controlTest3', 'Something else', 'input'),
    new AnyAppControl('controlTest4', true, 'checkbox')
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

    this.controls.push(new AnyAppControl('controlTest' + nr, '', type));
    this.controls = this.controls;
  }

  formSubmit(event: FormGroup) {
    this.output = JSON.stringify(event.value);
  }

}
