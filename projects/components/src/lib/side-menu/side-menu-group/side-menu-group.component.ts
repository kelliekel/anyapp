import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { AnyAppTreeModel, AnyAppEventModel, AnyAppEventKeys, AnyAppTreeType } from '../../components.model';
import { AnyAppBaseControl } from '../../base-control';

@Component({
  selector: 'aa-comp-side-menu-group',
  templateUrl: './side-menu-group.component.html',
  styleUrls: ['./side-menu-group.component.scss']
})
export class SideMenuGroupComponent extends AnyAppBaseControl implements OnInit {
  @Input() items: AnyAppTreeModel[];
  @Input() level: number = 0;

  constructor(_inject: Injector) {
    super(_inject);
  }

  ngOnInit() {
  }
  
  // pass event emitter to the app
  menuItemClick(model: any) {
    if(model)
      this.onEvent.emit(model);
  }

}
