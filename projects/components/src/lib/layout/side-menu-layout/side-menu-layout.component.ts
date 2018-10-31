import { Component, OnInit, Injector, Input, ViewChild, OnDestroy } from '@angular/core';
import { AnyAppBaseControl } from '../../base-control';
import { AnyAppEventModel, AnyAppTreeModel } from '../../components.model';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'aa-side-menu-layout',
  templateUrl: './side-menu-layout.component.html',
  styleUrls: ['./side-menu-layout.component.scss']
})
export class SideMenuLayoutComponent extends AnyAppBaseControl implements OnInit, OnDestroy {
  @Input() items: AnyAppTreeModel[];  
  @ViewChild('sideNav') sideNav: MatSidenav;
  @ViewChild('breadcrumb') breadcrumb: BreadcrumbComponent;

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
    if(model) {
      // update breadcrumb aswell
      this.breadcrumb.reset(model.value.text);
      //
      this.onEvent.emit(model);
    }
  }

}
