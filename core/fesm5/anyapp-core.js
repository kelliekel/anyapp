import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    CoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ CoreService.ngInjectableDef = defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
    return CoreService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    /**
     * @return {?}
     */
    CoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-core-core',
                    template: "\n    <p>\n      core works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    CoreComponent.ctorParameters = function () { return []; };
    return CoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [CoreComponent],
                    exports: [CoreComponent]
                },] },
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CoreService, CoreComponent, CoreModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55YXBwLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbnlhcHAvY29yZS9saWIvY29yZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYW55YXBwL2NvcmUvbGliL2NvcmUuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvcmUvbGliL2NvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb3JlLWNvcmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY29yZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvcmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29yZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7c0JBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLGdDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSw0Q0FJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozt3QkFWRDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFDUjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekI7O3FCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=