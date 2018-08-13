import { Component, OnInit, Input, Injector, ViewEncapsulation } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { AnyAppMenuItem, AnyAppEventModel, AnyAppEventKeys } from '../components.model';

@Component({
  selector: 'aa-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent extends AnyAppBaseControl implements OnInit {
  
  @Input() sideNav: boolean;
  @Input() title: string;

  @Input() menu: AnyAppMenuItem[];
  @Input() showPersonal: boolean = false;
  @Input() showNotification: boolean = false;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
  }

  toggleSideNav() {
    this.componentsService.sideNavToggle.next(true);
  }

  notificationItemClick() {
    this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_NOTIFICATION_CLICK));
  } 

  personalItemClick() {
      this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_FACE_CLICK));
  }

  menuItemClick(menuItem: AnyAppMenuItem) {
    if(menuItem)    
      this.onEvent.emit(new AnyAppEventModel<AnyAppMenuItem>(AnyAppEventKeys.MENU_ITEM_CLICK, menuItem));
  }
}
