import { Component, OnInit, Input, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyAppBaseControl } from '../base-control';

@Component({
  selector: 'aa-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends AnyAppBaseControl implements OnInit {  
  @Input() errorControl: FormControl;

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
  }
}
