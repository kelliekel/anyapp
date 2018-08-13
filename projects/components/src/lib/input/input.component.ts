import { Component, OnInit, Input, forwardRef, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';

@Component({
  selector: 'aa-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() type: string = "text";

  @Input() maxLength: number = null;
  //@Input() minLength: number = null;

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }
}
