/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyAppBaseControl } from '../base-control';
var ErrorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorComponent, _super);
    function ErrorComponent(_injector) {
        return _super.call(this, _injector) || this;
    }
    /**
     * @return {?}
     */
    ErrorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-error',
                    template: "<mat-error *ngIf=\"errorControl && errorControl.hasError('required')\">\n  {{config.errorMessages.required}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('email')\">\n  {{config.errorMessages.email}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('pattern')\">\n  {{config.errorMessages.pattern}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('minLength')\">\n  {{config.errorMessages.minLength}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('maxLength')\">\n  {{config.errorMessages.maxLength}}\n</mat-error>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ErrorComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ErrorComponent.propDecorators = {
        errorControl: [{ type: Input }]
    };
    return ErrorComponent;
}(AnyAppBaseControl));
export { ErrorComponent };
if (false) {
    /** @type {?} */
    ErrorComponent.prototype.errorControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBcUJoQiwwQ0FBaUI7SUFHbkQsd0JBQVksU0FBbUI7ZUFDN0Isa0JBQU0sU0FBUyxDQUFDO0tBQ2pCOzs7O0lBRUQsaUNBQVE7OztJQUFSO0tBQ0M7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSx3bUJBY0M7b0JBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQXRCa0MsUUFBUTs7OytCQXdCeEMsS0FBSzs7eUJBeEJSO0VBdUJvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWVycm9yJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JDb250cm9sICYmIGVycm9yQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICB7e2NvbmZpZy5lcnJvck1lc3NhZ2VzLnJlcXVpcmVkfX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ2VtYWlsJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5lbWFpbH19XG48L21hdC1lcnJvcj5cbjxtYXQtZXJyb3IgKm5nSWY9XCJlcnJvckNvbnRyb2wgJiYgZXJyb3JDb250cm9sLmhhc0Vycm9yKCdwYXR0ZXJuJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5wYXR0ZXJufX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ21pbkxlbmd0aCcpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMubWluTGVuZ3RofX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ21heExlbmd0aCcpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMubWF4TGVuZ3RofX1cbjwvbWF0LWVycm9yPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHsgIFxuICBASW5wdXQoKSBlcnJvckNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=