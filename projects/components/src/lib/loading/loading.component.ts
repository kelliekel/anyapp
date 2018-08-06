import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';

@Component({
  selector: 'aa-comp-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent extends AnyAppBaseControl implements OnInit {
  @Input() visible: boolean = false;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
  }

}
