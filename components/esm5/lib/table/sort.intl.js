/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, SkipSelf, Inject } from "@angular/core";
import { MatSortHeaderIntl } from "@angular/material";
import { ANYAPP_COMPONENTS_CONFIG } from "../components.config";
import * as i0 from "@angular/core";
import * as i1 from "../components.config";
var GenericSortHeaderIntl = /** @class */ (function (_super) {
    tslib_1.__extends(GenericSortHeaderIntl, _super);
    function GenericSortHeaderIntl(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        /**
         * ARIA label for the sorting button.
         */
        _this.sortButtonLabel = function (id) {
            return _this._sortBtnLabel + " " + id;
        };
        // set labels
        // set labels
        _this._sortBtnLabel = config.locales.sort_buttonLabel;
        return _this;
    }
    GenericSortHeaderIntl.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    GenericSortHeaderIntl.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ GenericSortHeaderIntl.ngInjectableDef = i0.defineInjectable({ factory: function GenericSortHeaderIntl_Factory() { return new GenericSortHeaderIntl(i0.inject(i1.ANYAPP_COMPONENTS_CONFIG)); }, token: GenericSortHeaderIntl, providedIn: "root" });
    return GenericSortHeaderIntl;
}(MatSortHeaderIntl));
export { GenericSortHeaderIntl };
if (false) {
    /** @type {?} */
    GenericSortHeaderIntl.prototype._sortBtnLabel;
    /**
     * ARIA label for the sorting button.
     * @type {?}
     */
    GenericSortHeaderIntl.prototype.sortButtonLabel;
    /** @type {?} */
    GenericSortHeaderIntl.prototype.config;
}
/**
 * @param {?} parentIntl
 * @return {?}
 */
export function ANYAPP_SORT_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** @type {?} */
export var ANYAPP_SORT_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
    useFactory: ANYAPP_SORT_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5pbnRsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3NvcnQuaW50bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFHLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7SUFNckIsaURBQWlCO0lBQzNELCtCQUM2QyxNQUE4QjtRQUQzRSxZQUVFLGlCQUFPLFNBSVA7UUFMMkMsWUFBTSxHQUFOLE1BQU0sQ0FBd0I7Ozs7Z0NBVXhELFVBQUMsRUFBVTtZQUMzQixNQUFNLENBQUksS0FBSSxDQUFDLGFBQWEsU0FBSSxFQUFJLENBQUM7U0FDdEM7O1FBUkEsQUFEQSxhQUFhO1FBQ2IsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDOztLQUNyRDs7Z0JBVkYsVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnREFHSSxNQUFNLFNBQUMsd0JBQXdCOzs7Z0NBVnBDO0VBUTJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxDLE1BQU0sdUNBQXVDLFVBQTZCO0lBQ3hFLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0NBQzlDOztBQUVELFdBQWEsb0JBQW9CLEdBQUc7O0lBRWxDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzRCxVQUFVLEVBQUUsNEJBQTRCO0NBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdFNvcnRIZWFkZXJJbnRsICB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuaW1wb3J0IHsgQW55QXBwQ29tcG9uZW50c0NvbmZpZyB9IGZyb20gXCIuLi9jb21wb25lbnRzLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljU29ydEhlYWRlckludGwgZXh0ZW5kcyBNYXRTb3J0SGVhZGVySW50bCB7XHJcblx0Y29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEFueUFwcENvbXBvbmVudHNDb25maWcpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHJcblx0XHRcdC8vIHNldCBsYWJlbHNcclxuXHRcdFx0dGhpcy5fc29ydEJ0bkxhYmVsID0gY29uZmlnLmxvY2FsZXMuc29ydF9idXR0b25MYWJlbDtcclxuXHRcdH1cclxuXHRcclxuXHRwcml2YXRlIF9zb3J0QnRuTGFiZWw6IHN0cmluZztcclxuXHRcclxuXHQvKiogQVJJQSBsYWJlbCBmb3IgdGhlIHNvcnRpbmcgYnV0dG9uLiAqL1xyXG4gIHNvcnRCdXR0b25MYWJlbCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5fc29ydEJ0bkxhYmVsfSAke2lkfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQU5ZQVBQX1NPUlRfUFJPVklERVJfRkFDVE9SWShwYXJlbnRJbnRsOiBNYXRTb3J0SGVhZGVySW50bCkge1xyXG4gIHJldHVybiBwYXJlbnRJbnRsIHx8IG5ldyBNYXRTb3J0SGVhZGVySW50bCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQU5ZQVBQX1NPUlRfUFJPVklERVIgPSB7XHJcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBNYXRQYWdpbmF0b3JJbnRsIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXHJcbiAgcHJvdmlkZTogTWF0U29ydEhlYWRlckludGwsXHJcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE1hdFNvcnRIZWFkZXJJbnRsXV0sXHJcbiAgdXNlRmFjdG9yeTogQU5ZQVBQX1NPUlRfUFJPVklERVJfRkFDVE9SWVxyXG59OyJdfQ==