import { Component, OnInit } from '@angular/core';
import { ANYAPP_FIELD_TYPE_VALUES, ANYAPP_FIELD_TYPE, AnyAppControl } from '@anyapp/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aa-field-test',
  templateUrl: './field-test.component.html',
  styleUrls: ['./field-test.component.scss']
})
export class FieldTestComponent implements OnInit {
  selectedTab: string;

  fieldType: ANYAPP_FIELD_TYPE = "input";
  fieldTypeOptions: string[] = ANYAPP_FIELD_TYPE_VALUES;

  anyAppControlProperties: any[] = [];

  fieldTypeControl: FormControl = new FormControl('input');
  fieldControl: AnyAppControl = { 
    name: 'simpleControl1', 
    value: 'Initial value', 
    childs: null,
    fieldType: this.fieldTypeControl.value, 
    properties: { 
      placeholder: 'A simple placeholder', 
      required: true
    } 
  }

  constructor() { }

  ngOnInit() {
    Object.keys(this.fieldControl).forEach(key => this.anyAppControlProperties.push(key));
  }

}
