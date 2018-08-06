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
var ComponentsService = /** @class */ (function () {
    function ComponentsService(config, _snackbar) {
        this.config = config;
        this._snackbar = _snackbar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    ComponentsService.prototype.showMessage = /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    function (message, action) {
        return this._snackbar.open(message, action, /** @type {?} */ ({
            duration: this.config.messageDuration
        }));
    };
    ComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ComponentsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ ComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(i0.inject(i1.ANYAPP_COMPONENTS_CONFIG), i0.inject(i2.MatSnackBar)); }, token: ComponentsService, providedIn: "root" });
    return ComponentsService;
}());
export { ComponentsService };
if (false) {
    /** @type {?} */
    ComponentsService.prototype.config;
    /** @type {?} */
    ComponentsService.prototype._snackbar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBcUQsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQTBCLE1BQU0scUJBQXFCLENBQUM7Ozs7O0lBTXJGLDJCQUM0QyxNQUE4QixFQUNoRTtRQURrQyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUNoRSxjQUFTLEdBQVQsU0FBUztLQUNsQjs7Ozs7O0lBRU0sdUNBQVc7Ozs7O2NBQUMsT0FBZSxFQUFFLE1BQWM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLG9CQUFxQjtZQUM3RCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlO1NBQ3RDLEVBQUMsQ0FBQzs7O2dCQVpOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBR0ksTUFBTSxTQUFDLHdCQUF3QjtnQkFUM0IsV0FBVzs7OzRCQUFwQjs7U0FPYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJDb25maWcsIE1hdFNuYWNrQmFyUmVmLCBTaW1wbGVTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHLCBBbnlBcHBDb21wb25lbnRzQ29uZmlnIH0gZnJvbSAnLi9jb21wb25lbnRzLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNTZXJ2aWNlIHsgIFxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEFueUFwcENvbXBvbmVudHNDb25maWcsXG4gICAgcHJpdmF0ZSBfc25hY2tiYXI6IE1hdFNuYWNrQmFyKSB7IFxuICB9XG5cbiAgcHVibGljIHNob3dNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIDogTWF0U25hY2tCYXJSZWY8U2ltcGxlU25hY2tCYXI+IHtcbiAgICByZXR1cm4gdGhpcy5fc25hY2tiYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIDxNYXRTbmFja0JhckNvbmZpZz57XG4gICAgICBkdXJhdGlvbjogdGhpcy5jb25maWcubWVzc2FnZUR1cmF0aW9uXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==