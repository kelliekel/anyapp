import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../../base-control';
import { ANYAPP_COLOR } from '../../components.types';

@Component({
  selector: 'aa-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent extends AnyAppBaseControl implements OnInit {
  @Input() visible: boolean = false;
  @Input() type: 'progress' | 'spinner' = 'spinner'
  @Input() color: ANYAPP_COLOR = 'primary';
  
  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
  }

}
