/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Injector } from '@angular/core';
import { AnyAppTreeModel, AnyAppEventModel, AnyAppEventKeys } from '../../components.model';
import { AnyAppBaseControl } from '../../base-control';
var SideMenuItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SideMenuItemComponent, _super);
    function SideMenuItemComponent(_inject) {
        return _super.call(this, _inject) || this;
    }
    /**
     * @return {?}
     */
    SideMenuItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SideMenuItemComponent.prototype.clickMenuItem = /**
     * @return {?}
     */
    function () {
        if (this.item.children && this.item.children.length > 0) {
            this.item.expanded = !this.item.expanded;
        }
        if (this.item.navigateUrl != null) {
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, this.item));
        }
    };
    SideMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-side-menu-item',
                    template: "<div *ngIf=\"item\" (click)=\"clickMenuItem()\">\n  <button mat-button [class.sub]=\"level > 0\">\n    \n    <span>{{item.text}}</span>\n    \n    <mat-icon *ngIf=\"item.children?.length > 0\">\n        {{item.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}\n    </mat-icon>\n  </button>\n</div>",
                    styles: ["button{width:100%;text-align:left}button:not(.sub) span{text-transform:uppercase}mat-icon{position:absolute;top:0;right:0;margin:4px}.sub{font-weight:400}"]
                },] },
    ];
    /** @nocollapse */
    SideMenuItemComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    SideMenuItemComponent.propDecorators = {
        item: [{ type: Input }],
        level: [{ type: Input }]
    };
    return SideMenuItemComponent;
}(AnyAppBaseControl));
export { SideMenuItemComponent };
if (false) {
    /** @type {?} */
    SideMenuItemComponent.prototype.item;
    /** @type {?} */
    SideMenuItemComponent.prototype.level;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NpZGUtbWVudS9zaWRlLW1lbnUtaXRlbS9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0JaLGlEQUFpQjtJQUkxRCwrQkFBWSxPQUFpQjtlQUMzQixrQkFBTSxPQUFPLENBQUM7S0FDZjs7OztJQUVELHdDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMxQztRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBa0IsZUFBZSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0RztLQUNGOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxxVEFTTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyw0SkFBNEosQ0FBQztpQkFDdks7Ozs7Z0JBakJ3RCxRQUFROzs7dUJBbUI5RCxLQUFLO3dCQUNMLEtBQUs7O2dDQXBCUjtFQWtCMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBUcmVlTW9kZWwsIEFueUFwcEV2ZW50TW9kZWwsIEFueUFwcEV2ZW50S2V5cyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMubW9kZWwnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNpZGUtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiaXRlbVwiIChjbGljayk9XCJjbGlja01lbnVJdGVtKClcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFtjbGFzcy5zdWJdPVwibGV2ZWwgPiAwXCI+XG4gICAgXG4gICAgPHNwYW4+e3tpdGVtLnRleHR9fTwvc3Bhbj5cbiAgICBcbiAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmNoaWxkcmVuPy5sZW5ndGggPiAwXCI+XG4gICAgICAgIHt7aXRlbS5leHBhbmRlZCA/ICdrZXlib2FyZF9hcnJvd19kb3duJyA6ICdrZXlib2FyZF9hcnJvd19yaWdodCd9fVxuICAgIDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGJ1dHRvbnt3aWR0aDoxMDAlO3RleHQtYWxpZ246bGVmdH1idXR0b246bm90KC5zdWIpIHNwYW57dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfW1hdC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjRweH0uc3Vie2ZvbnQtd2VpZ2h0OjQwMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IEFueUFwcFRyZWVNb2RlbDtcbiAgQElucHV0KCkgbGV2ZWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0OiBJbmplY3Rvcikge1xuICAgIHN1cGVyKF9pbmplY3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbGlja01lbnVJdGVtKCkgeyAgICBcbiAgICBpZih0aGlzLml0ZW0uY2hpbGRyZW4gJiYgdGhpcy5pdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXRlbS5leHBhbmRlZCA9ICF0aGlzLml0ZW0uZXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pdGVtLm5hdmlnYXRlVXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsPEFueUFwcFRyZWVNb2RlbD4oQW55QXBwRXZlbnRLZXlzLk1FTlVfSVRFTV9DTElDSywgdGhpcy5pdGVtKSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==