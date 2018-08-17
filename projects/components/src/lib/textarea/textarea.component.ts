import { Component, OnInit, Input, forwardRef, Injector } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';

@Component({
  selector: 'aa-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
  @Input() type: string = "text";
  @Input() placeholder: string;
	@Input() label: string;
	@Input() hint: string;
  @Input() maxLength: number = null;
  //@Input() minLength: number = null;

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }
}
