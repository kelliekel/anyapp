import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { AnyAppTreeModel, AnyAppEventModel, AnyAppEventKeys, AnyAppTreeType } from '../../components.model';
import { AnyAppBaseControl } from '../../base-control';

@Component({
  selector: 'aa-comp-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent extends AnyAppBaseControl implements OnInit {
  @Input() item: AnyAppTreeModel;
  @Input() level: number;

  constructor(_inject: Injector) {
    super(_inject);
  }

  ngOnInit() {
  }

  clickMenuItem() {
    if(this.item.children && this.item.children.length > 0) {
      this.item.toggle()
    }

    if(this.item.type == AnyAppTreeType.Item) {
      this.onEvent.emit(new AnyAppEventModel<AnyAppTreeModel>(AnyAppEventKeys.MENU_ITEM_CLICK, this.item));
    }
  }

}
