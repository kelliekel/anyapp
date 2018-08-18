import { Component, OnInit } from '@angular/core';
import { AnyAppControl } from '@anyapp/components';

@Component({
  selector: 'aa-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  controls: AnyAppControl[] = [
    new AnyAppControl('controlTest1', '', 'input'),
    new AnyAppControl('controlTest2', false, 'checkbox')
  ];

  data: any = {
    controlTest1: 'initial value from formdata',
    controlTest2: 'true'
  }

  constructor() { }

  ngOnInit() {
  }

  formSubmit(event: any) {
    
  }
}
