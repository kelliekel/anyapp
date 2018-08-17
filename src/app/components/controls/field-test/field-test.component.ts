import { Component, OnInit } from '@angular/core';
import { ANYAPP_FIELD_TYPE_VALUES, AnyAppControl, ANYAPP_FIELD_TYPE } from '@anyapp/components';
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

  fieldTypeControl: FormControl = new FormControl('input');

  constructor() { }

  ngOnInit() {
  }

}
