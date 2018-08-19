import { Component, OnInit, Input, forwardRef, Injector, ViewChild, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';
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
export class InputComponent extends AnyAppModelControl implements OnInit, OnChanges {
  @Input() type: string = "text";
  @Input() placeholder: string;
	@Input() label: string;
	@Input() hint: string;
  @Input() maxLength: number = null;
  @Input() required: boolean;
  @Input() mask: any;

  //@Input() minLength: number = null;

  constructor(_injector: Injector,
    private renderer: Renderer2) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }
}
