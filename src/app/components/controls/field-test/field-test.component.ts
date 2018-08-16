import { Component, OnInit } from '@angular/core';
import { ANYAPP_FIELD_TYPE_VALUES } from '@anyapp/components';

@Component({
  selector: 'aa-field-test',
  templateUrl: './field-test.component.html',
  styleUrls: ['./field-test.component.scss']
})
export class FieldTestComponent implements OnInit {
  selectedTab: string;
  
  fieldType: string = "input";
  fieldTypeOptions: string[] = ANYAPP_FIELD_TYPE_VALUES;

  constructor() { }

  ngOnInit() {
  }

}
