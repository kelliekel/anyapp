import { Component, OnInit, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';

@Component({
  selector: 'aa-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ]
})
export class SliderComponent extends AnyAppModelControl implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

}
