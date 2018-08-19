import { Component, OnInit } from '@angular/core';
import { ANYAPP_BUTTON_TYPE_VALUES, ANYAPP_COLOR_VALUES } from '@anyapp/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aa-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {
  selectedTab: string;
  styleControl: FormControl = new FormControl('raised');
  colorControl: FormControl = new FormControl('primary');
  
  //defaults
  buttonStyleOptions: string[] = ANYAPP_BUTTON_TYPE_VALUES;
  buttonColorOptions: string[] = ANYAPP_COLOR_VALUES;

  constructor() { }

  ngOnInit() {
  }

}
