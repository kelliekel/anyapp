import { Component, OnInit, forwardRef, Input, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';

@Component({
  selector: 'aa-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
  @Input() slideToggle: boolean;  
	@Input() label: string;
	@Input() hint: string;
  
  labelPosition: 'before' | 'after' = 'after';

  constructor(_injector: Injector) { 
    super(_injector);
    this.slideToggle = this.config.inputConfig.slideToggle;
  }

  ngOnInit() {
    this.initializeForm();
  }
}
