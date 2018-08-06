(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@anyapp/core', ['exports', '@angular/core'], factory) :
    (factory((global.anyapp = global.anyapp || {}, global.anyapp.core = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreService = (function () {
        function CoreService() {
        }
        CoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ CoreService.ngInjectableDef = i0.defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
        return CoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var CoreModule = (function () {
        function CoreModule() {
        }
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.CoreService = CoreService;
    exports.CoreComponent = CoreComponent;
    exports.CoreModule = CoreModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55YXBwLWNvcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYW55YXBwL2NvcmUvbGliL2NvcmUuc2VydmljZS50cyIsIm5nOi8vQGFueWFwcC9jb3JlL2xpYi9jb3JlLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb3JlL2xpYi9jb3JlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29yZS1jb3JlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvcmUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb3JlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvcmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzswQkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsZ0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSw0Q0FJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs0QkFWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQ3pCOzt5QkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==