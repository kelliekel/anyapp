/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf, Inject } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";
import { ANYAPP_COMPONENTS_CONFIG } from "../components.config";
import * as i0 from "@angular/core";
import * as i1 from "../components.config";
export class GenericPaginatorIntl extends MatPaginatorIntl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super();
        this.config = config;
        /**
         * A label for the range of items within the current page and the length of the whole list.
         */
        this.getRangeLabel = (page, pageSize, length) => {
            if (length == 0 || pageSize == 0) {
                return `0 ${this._of} ${length}`;
            }
            length = Math.max(length, 0);
            /** @type {?} */
            const startIndex = page * pageSize;
            /** @type {?} */
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return `${startIndex + 1} - ${endIndex} ${this._of} ${length}`;
        };
        // set labels
        this.itemsPerPageLabel = config.locales.paginator_itemsPerPage;
        this.nextPageLabel = config.locales.paginator_nextPage;
        this.previousPageLabel = config.locales.paginator_previousPage;
        this.firstPageLabel = config.locales.paginator_firstPage;
        this.lastPageLabel = config.locales.paginator_lastPage;
        //
        this._of = config.locales.paginator_of;
    }
}
GenericPaginatorIntl.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
GenericPaginatorIntl.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] }
];
/** @nocollapse */ GenericPaginatorIntl.ngInjectableDef = i0.defineInjectable({ factory: function GenericPaginatorIntl_Factory() { return new GenericPaginatorIntl(i0.inject(i1.ANYAPP_COMPONENTS_CONFIG)); }, token: GenericPaginatorIntl, providedIn: "root" });
if (false) {
    /** @type {?} */
    GenericPaginatorIntl.prototype._of;
    /**
     * A label for the range of items within the current page and the length of the whole list.
     * @type {?}
     */
    GenericPaginatorIntl.prototype.getRangeLabel;
    /** @type {?} */
    GenericPaginatorIntl.prototype.config;
}
/**
 * @param {?} parentIntl
 * @return {?}
 */
export function ANYAPP_PAGINATOR_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/** @type {?} */
export const ANYAPP_PAGINATOR_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
    useFactory: ANYAPP_PAGINATOR_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmludGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFibGUvcGFnaW5hdG9yLmludGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFHLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1oRSxNQUFNLDJCQUE0QixTQUFRLGdCQUFnQjs7OztJQUN6RCxZQUM2QyxNQUE4QjtRQUN6RSxLQUFLLEVBQUUsQ0FBQztRQURtQyxXQUFNLEdBQU4sTUFBTSxDQUF3Qjs7Ozs2QkFnQjFELENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDakUsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO2FBQUU7WUFFdkUsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUU3QixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDOztZQUduQyxNQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBRTFCLE1BQU0sQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDaEU7O1FBekJBLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDOztRQUV2RCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0tBQ3ZDOzs7WUFoQkYsVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7OzRDQUdJLE1BQU0sU0FBQyx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDcEMsTUFBTSw0Q0FBNEMsVUFBNEI7SUFDNUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7Q0FDN0M7O0FBRUQsYUFBYSx5QkFBeUIsR0FBRzs7SUFFdkMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFELFVBQVUsRUFBRSxpQ0FBaUM7Q0FDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCAgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFueUFwcENvbXBvbmVudHNDb25maWcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VuZXJpY1BhZ2luYXRvckludGwgZXh0ZW5kcyBNYXRQYWdpbmF0b3JJbnRsIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogQW55QXBwQ29tcG9uZW50c0NvbmZpZykge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cclxuXHRcdFx0Ly8gc2V0IGxhYmVsc1xyXG5cdFx0XHR0aGlzLml0ZW1zUGVyUGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX2l0ZW1zUGVyUGFnZTtcclxuXHRcdFx0dGhpcy5uZXh0UGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX25leHRQYWdlO1xyXG5cdFx0XHR0aGlzLnByZXZpb3VzUGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX3ByZXZpb3VzUGFnZTtcclxuXHRcdFx0dGhpcy5maXJzdFBhZ2VMYWJlbCA9IGNvbmZpZy5sb2NhbGVzLnBhZ2luYXRvcl9maXJzdFBhZ2U7XHJcblx0XHRcdHRoaXMubGFzdFBhZ2VMYWJlbCA9IGNvbmZpZy5sb2NhbGVzLnBhZ2luYXRvcl9sYXN0UGFnZTtcclxuXHRcdFx0Ly9cclxuXHRcdFx0dGhpcy5fb2YgPSBjb25maWcubG9jYWxlcy5wYWdpbmF0b3Jfb2Y7XHJcblx0XHR9XHJcblx0XHJcblx0cHJpdmF0ZSBfb2Y6IHN0cmluZztcclxuXHRcclxuXHQvKiogQSBsYWJlbCBmb3IgdGhlIHJhbmdlIG9mIGl0ZW1zIHdpdGhpbiB0aGUgY3VycmVudCBwYWdlIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSB3aG9sZSBsaXN0LiAqL1xyXG4gIGdldFJhbmdlTGFiZWwgPSAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGxlbmd0aCA9PSAwIHx8IHBhZ2VTaXplID09IDApIHsgcmV0dXJuIGAwICR7dGhpcy5fb2Z9ICR7bGVuZ3RofWA7IH1cclxuXHJcbiAgICBsZW5ndGggPSBNYXRoLm1heChsZW5ndGgsIDApO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XHJcblxyXG4gICAgLy8gSWYgdGhlIHN0YXJ0IGluZGV4IGV4Y2VlZHMgdGhlIGxpc3QgbGVuZ3RoLCBkbyBub3QgdHJ5IGFuZCBmaXggdGhlIGVuZCBpbmRleCB0byB0aGUgZW5kLlxyXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID9cclxuICAgICAgICBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUsIGxlbmd0aCkgOlxyXG4gICAgICAgIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcclxuXHJcbiAgICByZXR1cm4gYCR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0gJHt0aGlzLl9vZn0gJHtsZW5ndGh9YDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBTllBUFBfUEFHSU5BVE9SX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50SW50bDogTWF0UGFnaW5hdG9ySW50bCkge1xyXG4gIHJldHVybiBwYXJlbnRJbnRsIHx8IG5ldyBNYXRQYWdpbmF0b3JJbnRsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBTllBUFBfUEFHSU5BVE9SX1BST1ZJREVSID0ge1xyXG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gTWF0UGFnaW5hdG9ySW50bCBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxyXG4gIHByb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsXHJcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE1hdFBhZ2luYXRvckludGxdXSxcclxuICB1c2VGYWN0b3J5OiBBTllBUFBfUEFHSU5BVE9SX1BST1ZJREVSX0ZBQ1RPUllcclxufTsiXX0=