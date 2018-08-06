/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
export class TopMenuComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.showFace = false;
        this.showNotification = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    notificationItemClick() {
        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_NOTIFICATION_CLICK));
    }
    /**
     * @return {?}
     */
    faceItemClick() {
        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_FACE_CLICK));
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    menuItemClick(menuItem) {
        if (menuItem)
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, menuItem));
    }
}
TopMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-top-menu',
                template: `<mat-toolbar color="primary" class="mat-elevation-z6">
  <mat-toolbar-row>

    <div style="display: flex; flex:1; justify-content: space-between;">
      <div>

        <button *ngIf="sideNavRef" mat-icon-button (click)="sideNavRef.toggle()">
          <mat-icon>menu</mat-icon>
        </button>

        <span>{{title}}</span>
      </div>


      <ng-content></ng-content>


      <div>

        <button *ngIf="showNotification" (click)="notificationItemClick()" mat-icon-button>
          <mat-icon>notification_important</mat-icon>
        </button>

        <button *ngIf="showFace" (click)="faceItemClick()" mat-icon-button>
          <mat-icon>face</mat-icon>
        </button>

        <mat-menu #appMenu="matMenu">
          <button mat-menu-item *ngFor="let menuItem of menu" (click)="menuItemClick(menuItem)">{{menuItem.text}}</button>
        </mat-menu>

        <button *ngIf="menu && menu.length > 0" mat-icon-button [matMenuTriggerFor]="appMenu">
          <mat-icon>more_vert</mat-icon>
        </button>

      </div>
    </div>

  </mat-toolbar-row>
</mat-toolbar>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TopMenuComponent.ctorParameters = () => [
    { type: Injector }
];
TopMenuComponent.propDecorators = {
    sideNavRef: [{ type: Input }],
    title: [{ type: Input }],
    menu: [{ type: Input }],
    showFace: [{ type: Input }],
    showNotification: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TopMenuComponent.prototype.sideNavRef;
    /** @type {?} */
    TopMenuComponent.prototype.title;
    /** @type {?} */
    TopMenuComponent.prototype.menu;
    /** @type {?} */
    TopMenuComponent.prototype.showFace;
    /** @type {?} */
    TopMenuComponent.prototype.showNotification;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBOEN4RixNQUFNLHVCQUF3QixTQUFRLGlCQUFpQjs7OztJQVNyRCxZQUFZLFNBQW1CO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFKVSxLQUFLO2dDQUNHLEtBQUs7S0FJekM7Ozs7SUFFRCxRQUFRO0tBQ1A7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0tBQ2xGOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7S0FDNUU7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQXdCO1FBQ3BDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQWlCLGVBQWUsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN0Rzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXVDRztnQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQS9Da0MsUUFBUTs7O3lCQWtEeEMsS0FBSztvQkFDTCxLQUFLO21CQUVMLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcbmltcG9ydCB7IEFueUFwcE1lbnVJdGVtLCBBbnlBcHBFdmVudE1vZGVsLCBBbnlBcHBFdmVudEtleXMgfSBmcm9tICcuLi9jb21wb25lbnRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC10b3AtbWVudScsXG4gIHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16NlwiPlxuICA8bWF0LXRvb2xiYXItcm93PlxuXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXg6MTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1wiPlxuICAgICAgPGRpdj5cblxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2lkZU5hdlJlZlwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2lkZU5hdlJlZi50b2dnbGUoKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG5cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dOb3RpZmljYXRpb25cIiAoY2xpY2spPVwibm90aWZpY2F0aW9uSXRlbUNsaWNrKClcIiBtYXQtaWNvbi1idXR0b24+XG4gICAgICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbl9pbXBvcnRhbnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0ZhY2VcIiAoY2xpY2spPVwiZmFjZUl0ZW1DbGljaygpXCIgbWF0LWljb24tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtaWNvbj5mYWNlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPG1hdC1tZW51ICNhcHBNZW51PVwibWF0TWVudVwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgbWVudUl0ZW0gb2YgbWVudVwiIChjbGljayk9XCJtZW51SXRlbUNsaWNrKG1lbnVJdGVtKVwiPnt7bWVudUl0ZW0udGV4dH19PC9idXR0b24+XG4gICAgICAgIDwvbWF0LW1lbnU+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIm1lbnUgJiYgbWVudS5sZW5ndGggPiAwXCIgbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhcHBNZW51XCI+XG4gICAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRvcE1lbnVDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSBzaWRlTmF2UmVmOiBhbnk7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbWVudTogQW55QXBwTWVudUl0ZW1bXTtcbiAgQElucHV0KCkgc2hvd0ZhY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd05vdGlmaWNhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBub3RpZmljYXRpb25JdGVtQ2xpY2soKSB7XG4gICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWwoQW55QXBwRXZlbnRLZXlzLk1FTlVfTk9USUZJQ0FUSU9OX0NMSUNLKSk7XG4gIH0gXG5cbiAgZmFjZUl0ZW1DbGljaygpIHtcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsKEFueUFwcEV2ZW50S2V5cy5NRU5VX0ZBQ0VfQ0xJQ0spKTtcbiAgfVxuXG4gIG1lbnVJdGVtQ2xpY2sobWVudUl0ZW06IEFueUFwcE1lbnVJdGVtKSB7XG4gICAgaWYobWVudUl0ZW0pICAgIFxuICAgICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWw8QW55QXBwTWVudUl0ZW0+KEFueUFwcEV2ZW50S2V5cy5NRU5VX0lURU1fQ0xJQ0ssIG1lbnVJdGVtKSk7XG4gIH1cbn1cbiJdfQ==