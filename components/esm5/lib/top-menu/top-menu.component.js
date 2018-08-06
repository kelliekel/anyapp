/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
var TopMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TopMenuComponent, _super);
    function TopMenuComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.showFace = false;
        _this.showNotification = false;
        return _this;
    }
    /**
     * @return {?}
     */
    TopMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TopMenuComponent.prototype.notificationItemClick = /**
     * @return {?}
     */
    function () {
        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_NOTIFICATION_CLICK));
    };
    /**
     * @return {?}
     */
    TopMenuComponent.prototype.faceItemClick = /**
     * @return {?}
     */
    function () {
        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_FACE_CLICK));
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    TopMenuComponent.prototype.menuItemClick = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        if (menuItem)
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, menuItem));
    };
    TopMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-top-menu',
                    template: "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  <mat-toolbar-row>\n\n    <div style=\"display: flex; flex:1; justify-content: space-between;\">\n      <div>\n\n        <button *ngIf=\"sideNavRef\" mat-icon-button (click)=\"sideNavRef.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n        <span>{{title}}</span>\n      </div>\n\n\n      <ng-content></ng-content>\n\n\n      <div>\n\n        <button *ngIf=\"showNotification\" (click)=\"notificationItemClick()\" mat-icon-button>\n          <mat-icon>notification_important</mat-icon>\n        </button>\n\n        <button *ngIf=\"showFace\" (click)=\"faceItemClick()\" mat-icon-button>\n          <mat-icon>face</mat-icon>\n        </button>\n\n        <mat-menu #appMenu=\"matMenu\">\n          <button mat-menu-item *ngFor=\"let menuItem of menu\" (click)=\"menuItemClick(menuItem)\">{{menuItem.text}}</button>\n        </mat-menu>\n\n        <button *ngIf=\"menu && menu.length > 0\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n\n      </div>\n    </div>\n\n  </mat-toolbar-row>\n</mat-toolbar>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TopMenuComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    TopMenuComponent.propDecorators = {
        sideNavRef: [{ type: Input }],
        title: [{ type: Input }],
        menu: [{ type: Input }],
        showFace: [{ type: Input }],
        showNotification: [{ type: Input }]
    };
    return TopMenuComponent;
}(AnyAppBaseControl));
export { TopMenuComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFrQixnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUE4Q2xELDRDQUFpQjtJQVNyRCwwQkFBWSxTQUFtQjtRQUEvQixZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjt5QkFMNEIsS0FBSztpQ0FDRyxLQUFLOztLQUl6Qzs7OztJQUVELG1DQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsZ0RBQXFCOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7S0FDbEY7Ozs7SUFFRCx3Q0FBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQzVFOzs7OztJQUVELHdDQUFhOzs7O0lBQWIsVUFBYyxRQUF3QjtRQUNwQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFpQixlQUFlLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDdEc7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGtvQ0F1Q0c7b0JBQ2IsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQS9Da0MsUUFBUTs7OzZCQWtEeEMsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLEtBQUs7MkJBQ0wsS0FBSzttQ0FDTCxLQUFLOzsyQkF2RFI7RUFnRHNDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuaW1wb3J0IHsgQW55QXBwTWVudUl0ZW0sIEFueUFwcEV2ZW50TW9kZWwsIEFueUFwcEV2ZW50S2V5cyB9IGZyb20gJy4uL2NvbXBvbmVudHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXRvcC1tZW51JyxcbiAgdGVtcGxhdGU6IGA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo2XCI+XG4gIDxtYXQtdG9vbGJhci1yb3c+XG5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleDoxOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XCI+XG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJzaWRlTmF2UmVmXCIgbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJzaWRlTmF2UmVmLnRvZ2dsZSgpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cblxuICAgICAgPGRpdj5cblxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd05vdGlmaWNhdGlvblwiIChjbGljayk9XCJub3RpZmljYXRpb25JdGVtQ2xpY2soKVwiIG1hdC1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uX2ltcG9ydGFudDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RmFjZVwiIChjbGljayk9XCJmYWNlSXRlbUNsaWNrKClcIiBtYXQtaWNvbi1idXR0b24+XG4gICAgICAgICAgPG1hdC1pY29uPmZhY2U8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8bWF0LW1lbnUgI2FwcE1lbnU9XCJtYXRNZW51XCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBtZW51SXRlbSBvZiBtZW51XCIgKGNsaWNrKT1cIm1lbnVJdGVtQ2xpY2sobWVudUl0ZW0pXCI+e3ttZW51SXRlbS50ZXh0fX08L2J1dHRvbj5cbiAgICAgICAgPC9tYXQtbWVudT5cblxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwibWVudSAmJiBtZW51Lmxlbmd0aCA+IDBcIiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFwcE1lbnVcIj5cbiAgICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvbWF0LXRvb2xiYXItcm93PlxuPC9tYXQtdG9vbGJhcj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVG9wTWVudUNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIEBJbnB1dCgpIHNpZGVOYXZSZWY6IGFueTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKSBtZW51OiBBbnlBcHBNZW51SXRlbVtdO1xuICBASW5wdXQoKSBzaG93RmFjZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93Tm90aWZpY2F0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5vdGlmaWNhdGlvbkl0ZW1DbGljaygpIHtcbiAgICB0aGlzLm9uRXZlbnQuZW1pdChuZXcgQW55QXBwRXZlbnRNb2RlbChBbnlBcHBFdmVudEtleXMuTUVOVV9OT1RJRklDQVRJT05fQ0xJQ0spKTtcbiAgfSBcblxuICBmYWNlSXRlbUNsaWNrKCkge1xuICAgICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWwoQW55QXBwRXZlbnRLZXlzLk1FTlVfRkFDRV9DTElDSykpO1xuICB9XG5cbiAgbWVudUl0ZW1DbGljayhtZW51SXRlbTogQW55QXBwTWVudUl0ZW0pIHtcbiAgICBpZihtZW51SXRlbSkgICAgXG4gICAgICB0aGlzLm9uRXZlbnQuZW1pdChuZXcgQW55QXBwRXZlbnRNb2RlbDxBbnlBcHBNZW51SXRlbT4oQW55QXBwRXZlbnRLZXlzLk1FTlVfSVRFTV9DTElDSywgbWVudUl0ZW0pKTtcbiAgfVxufVxuIl19