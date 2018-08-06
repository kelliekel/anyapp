(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@anyapp/tools', ['exports', '@angular/core'], factory) :
    (factory((global.anyapp = global.anyapp || {}, global.anyapp.tools = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolsService = (function () {
        function ToolsService() {
        }
        ToolsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ToolsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ToolsService.ngInjectableDef = i0.defineInjectable({ factory: function ToolsService_Factory() { return new ToolsService(); }, token: ToolsService, providedIn: "root" });
        return ToolsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolsComponent = (function () {
        function ToolsComponent() {
        }
        /**
         * @return {?}
         */
        ToolsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ToolsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-tool-tools',
                        template: "\n    <p>\n      tools works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        ToolsComponent.ctorParameters = function () { return []; };
        return ToolsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolsModule = (function () {
        function ToolsModule() {
        }
        ToolsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ToolsComponent],
                        exports: [ToolsComponent]
                    },] },
        ];
        return ToolsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ToolsService = ToolsService;
    exports.ToolsComponent = ToolsComponent;
    exports.ToolsModule = ToolsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55YXBwLXRvb2xzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFueWFwcC90b29scy9saWIvdG9vbHMuc2VydmljZS50cyIsIm5nOi8vQGFueWFwcC90b29scy9saWIvdG9vbHMuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL3Rvb2xzL2xpYi90b29scy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb29sc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS10b29sLXRvb2xzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRvb2xzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVG9vbHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG9vbHNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsNkNBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7NkJBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO3FCQUMxQjs7MEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=