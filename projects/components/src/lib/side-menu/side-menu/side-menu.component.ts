import { Component, OnInit, Injector, Input, ViewChild, OnDestroy } from '@angular/core';
import { AnyAppBaseControl } from '../../base-control';
import { AnyAppEventModel, AnyAppTreeModel } from '../../components.model';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aa-comp-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent extends AnyAppBaseControl implements OnInit, OnDestroy {
  @Input() items: AnyAppTreeModel[];  
  @ViewChild('sideNav') sideNav: MatSidenav;

  private _sideNav$: Subscription;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
    this._sideNav$ = this.componentsService.sideNavToggle.subscribe(x => { 
      this.sideNav.toggle() 
    });
  }

  ngOnDestroy() {
    if(this._sideNav$)
      this._sideNav$.unsubscribe();
  }

  // pass event emitter to the app
  onItemClick(model: any) {
    if(model)
      this.onEvent.emit(model);
  }

}
