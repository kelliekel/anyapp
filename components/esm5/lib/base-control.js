/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Output, EventEmitter } from "@angular/core";
import { ANYAPP_COMPONENTS_CONFIG } from "./components.config";
import { ComponentsService } from "./components.service";
/**
 * @abstract
 */
var AnyAppBaseControl = /** @class */ (function () {
    function AnyAppBaseControl(_injector) {
        this._injector = _injector;
        this.onEvent = new EventEmitter();
        this.config = _injector.get(ANYAPP_COMPONENTS_CONFIG);
        this.componentsService = _injector.get(ComponentsService);
    }
    AnyAppBaseControl.propDecorators = {
        onEvent: [{ type: Output }]
    };
    return AnyAppBaseControl;
}());
export { AnyAppBaseControl };
if (false) {
    /** @type {?} */
    AnyAppBaseControl.prototype.onEvent;
    /** @type {?} */
    AnyAppBaseControl.prototype.config;
    /** @type {?} */
    AnyAppBaseControl.prototype.componentsService;
    /** @type {?} */
    AnyAppBaseControl.prototype._injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Jhc2UtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBMEIsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUFTdkQsMkJBQW9CLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7dUJBTGEsSUFBSSxZQUFZLEVBQW9CO1FBTXRGLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDM0Q7OzBCQVJBLE1BQU07OzRCQU5UOztTQUtzQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgSW5qZWN0b3IsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQW55QXBwQ29tcG9uZW50c0NvbmZpZywgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHIH0gZnJvbSBcIi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQW55QXBwRXZlbnRNb2RlbCB9IGZyb20gXCIuL2NvbXBvbmVudHMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnlBcHBCYXNlQ29udHJvbCB7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnQ6IEV2ZW50RW1pdHRlcjxBbnlBcHBFdmVudE1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXI8QW55QXBwRXZlbnRNb2RlbD4oKTtcclxuICBcclxuICBjb25maWc6IEFueUFwcENvbXBvbmVudHNDb25maWc7XHJcbiAgY29tcG9uZW50c1NlcnZpY2U6IENvbXBvbmVudHNTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHRoaXMuY29uZmlnID0gX2luamVjdG9yLmdldChBTllBUFBfQ09NUE9ORU5UU19DT05GSUcpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzU2VydmljZSA9IF9pbmplY3Rvci5nZXQoQ29tcG9uZW50c1NlcnZpY2UpO1xyXG4gIH1cclxufSJdfQ==