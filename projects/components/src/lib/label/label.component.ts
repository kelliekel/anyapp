import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';

@Component({
  selector: 'aa-comp-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent extends AnyAppFormControl implements OnInit {
  @Input() for: string;
  
  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
  }

}
