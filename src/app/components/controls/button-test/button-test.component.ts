import { Component, OnInit } from '@angular/core';
import { ANYAPP_BUTTON_TYPE_VALUES, ANYAPP_COLOR_VALUES } from '@anyapp/components';

@Component({
  selector: 'aa-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {
  selectedTab: string;
  
  //defaults
  buttonStyle: string = "raised";
  buttonStyleOptions: string[] = ANYAPP_BUTTON_TYPE_VALUES;
  buttonColor: string = "primary";
  buttonColorOptions: string[] = ANYAPP_COLOR_VALUES;

  constructor() { }

  ngOnInit() {
  }

}
