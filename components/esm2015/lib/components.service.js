/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { MatSnackBar } from '@angular/material';
import { Injectable, Inject } from '@angular/core';
import { ANYAPP_COMPONENTS_CONFIG } from './components.config';
import * as i0 from "@angular/core";
import * as i1 from "./components.config";
import * as i2 from "@angular/material/snack-bar";
export class ComponentsService {
    /**
     * @param {?} config
     * @param {?} _snackbar
     */
    constructor(config, _snackbar) {
        this.config = config;
        this._snackbar = _snackbar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    showMessage(message, action) {
        return this._snackbar.open(message, action, /** @type {?} */ ({
            duration: this.config.messageDuration
        }));
    }
}
ComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ComponentsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] },
    { type: MatSnackBar }
];
/** @nocollapse */ ComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(i0.inject(i1.ANYAPP_COMPONENTS_CONFIG), i0.inject(i2.MatSnackBar)); }, token: ComponentsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ComponentsService.prototype.config;
    /** @type {?} */
    ComponentsService.prototype._snackbar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBcUQsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQTBCLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLdkYsTUFBTTs7Ozs7SUFDSixZQUM0QyxNQUE4QixFQUNoRTtRQURrQyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUNoRSxjQUFTLEdBQVQsU0FBUztLQUNsQjs7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQWUsRUFBRSxNQUFjO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxvQkFBcUI7WUFDN0QsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZTtTQUN0QyxFQUFDLENBQUM7Ozs7WUFaTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBR0ksTUFBTSxTQUFDLHdCQUF3QjtZQVQzQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyQ29uZmlnLCBNYXRTbmFja0JhclJlZiwgU2ltcGxlU25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRywgQW55QXBwQ29tcG9uZW50c0NvbmZpZyB9IGZyb20gJy4vY29tcG9uZW50cy5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzU2VydmljZSB7ICBcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChBTllBUFBfQ09NUE9ORU5UU19DT05GSUcpIHByaXZhdGUgY29uZmlnOiBBbnlBcHBDb21wb25lbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgX3NuYWNrYmFyOiBNYXRTbmFja0JhcikgeyBcbiAgfVxuXG4gIHB1YmxpYyBzaG93TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSA6IE1hdFNuYWNrQmFyUmVmPFNpbXBsZVNuYWNrQmFyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYWNrYmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCA8TWF0U25hY2tCYXJDb25maWc+e1xuICAgICAgZHVyYXRpb246IHRoaXMuY29uZmlnLm1lc3NhZ2VEdXJhdGlvblxuICAgIH0pO1xuICB9XG59XG4iXX0=