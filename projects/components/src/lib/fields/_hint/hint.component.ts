import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../../base-control';

@Component({
  selector: 'aa-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent extends AnyAppBaseControl implements OnInit {
  @Input() align: "start" | "end" = "start";
  
  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
  }

}
