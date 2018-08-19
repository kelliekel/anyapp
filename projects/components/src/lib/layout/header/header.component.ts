import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../../base-control';

@Component({
  selector: 'aa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AnyAppBaseControl implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() divider: boolean = true;
  
  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
  }

}
