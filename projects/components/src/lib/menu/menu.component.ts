import { Component, OnInit, Input, Output, EventEmitter, Injector, ViewChild } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { MatMenu, MatMenuTrigger } from '@angular/material';
import { AnyAppMenuItem } from '../components.model';

@Component({
  selector: 'aa-comp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends AnyAppBaseControl implements OnInit { 
  @ViewChild(MatMenuTrigger) _menuTrigger: MatMenuTrigger;
   
  @Input() items: AnyAppMenuItem[];
  @Output() onItemClick: EventEmitter<AnyAppMenuItem> = new EventEmitter<AnyAppMenuItem>();
  
  constructor(_injector: Injector) {
    super(_injector);
  }

  open() {
    this._menuTrigger.openMenu();
  }

  close() {
    this._menuTrigger.closeMenu();
  }

  itemClick(event: AnyAppMenuItem) {
    this.onItemClick.emit(event);
  }

  ngOnInit() {
  }

}