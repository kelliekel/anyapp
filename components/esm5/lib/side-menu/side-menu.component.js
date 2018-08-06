/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, Input } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
var SideMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SideMenuComponent, _super);
    function SideMenuComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.level = 0;
        return _this;
    }
    /**
     * @return {?}
     */
    SideMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    // pass event emitter to the app
    /**
     * @param {?} model
     * @return {?}
     */
    SideMenuComponent.prototype.onItemClick = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        if (model)
            this.onEvent.emit(model);
    };
    SideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-side-menu',
                    template: "<div class=\"wrapper\" [style.paddingLeft.px]=\"level*10\">\n  <div *ngFor=\"let item of items\">\n    <aa-comp-side-menu-item (onEvent)=\"onItemClick($event)\" [item]=\"item\" [level]=\"level\"></aa-comp-side-menu-item>\n\n    <div><!--[hidden]=\"item.children?.length == 0 || !item.expanded\"-->\n      <aa-comp-side-menu [items]=\"item.children\" [level]=\"level+1\"></aa-comp-side-menu>\n    </div>\n  </div>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SideMenuComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    SideMenuComponent.propDecorators = {
        items: [{ type: Input }],
        level: [{ type: Input }]
    };
    return SideMenuComponent;
}(AnyAppBaseControl));
export { SideMenuComponent };
if (false) {
    /** @type {?} */
    SideMenuComponent.prototype.items;
    /** @type {?} */
    SideMenuComponent.prototype.level;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFnQmIsNkNBQWlCO0lBSXRELDJCQUFZLFNBQW1CO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO3NCQUp3QixDQUFDOztLQUl6Qjs7OztJQUVELG9DQUFROzs7SUFBUjtLQUNDO0lBRUQsZ0NBQWdDOzs7OztJQUNoQyx1Q0FBVzs7OztJQUFYLFVBQVksS0FBd0M7UUFDbEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHNhQVFMO29CQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFoQjJCLFFBQVE7Ozt3QkFrQmpDLEtBQUs7d0JBQ0wsS0FBSzs7NEJBbkJSO0VBaUJ1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuaW1wb3J0IHsgQW55QXBwRXZlbnRNb2RlbCwgQW55QXBwVHJlZU1vZGVsIH0gZnJvbSAnLi4vY29tcG9uZW50cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtc2lkZS1tZW51JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCJsZXZlbCoxMFwiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgPGFhLWNvbXAtc2lkZS1tZW51LWl0ZW0gKG9uRXZlbnQpPVwib25JdGVtQ2xpY2soJGV2ZW50KVwiIFtpdGVtXT1cIml0ZW1cIiBbbGV2ZWxdPVwibGV2ZWxcIj48L2FhLWNvbXAtc2lkZS1tZW51LWl0ZW0+XG5cbiAgICA8ZGl2PjwhLS1baGlkZGVuXT1cIml0ZW0uY2hpbGRyZW4/Lmxlbmd0aCA9PSAwIHx8ICFpdGVtLmV4cGFuZGVkXCItLT5cbiAgICAgIDxhYS1jb21wLXNpZGUtbWVudSBbaXRlbXNdPVwiaXRlbS5jaGlsZHJlblwiIFtsZXZlbF09XCJsZXZlbCsxXCI+PC9hYS1jb21wLXNpZGUtbWVudT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBBbnlBcHBUcmVlTW9kZWxbXTtcbiAgQElucHV0KCkgbGV2ZWw6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8vIHBhc3MgZXZlbnQgZW1pdHRlciB0byB0aGUgYXBwXG4gIG9uSXRlbUNsaWNrKG1vZGVsOiBBbnlBcHBFdmVudE1vZGVsPEFueUFwcFRyZWVNb2RlbD4pIHtcbiAgICBpZihtb2RlbClcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KG1vZGVsKTtcbiAgfVxuXG59XG4iXX0=