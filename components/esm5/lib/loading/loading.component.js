/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
var LoadingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoadingComponent, _super);
    function LoadingComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.visible = false;
        return _this;
    }
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-loading',
                    template: "<mat-progress-bar *ngIf=\"visible\" mode=\"indeterminate\"></mat-progress-bar>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    LoadingComponent.propDecorators = {
        visible: [{ type: Input }]
    };
    return LoadingComponent;
}(AnyAppBaseControl));
export { LoadingComponent };
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.visible;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFPZCw0Q0FBaUI7SUFHckQsMEJBQVksU0FBbUI7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7d0JBSjJCLEtBQUs7O0tBSWhDOzs7O0lBRUQsbUNBQVE7OztJQUFSO0tBQ0M7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZ0ZBQTRFO29CQUN0RixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7Z0JBUGtDLFFBQVE7OzswQkFTeEMsS0FBSzs7MkJBVFI7RUFRc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1sb2FkaW5nJyxcbiAgdGVtcGxhdGU6IGA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj1cInZpc2libGVcIiBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19