/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyAppBaseControl } from '../base-control';
export class ErrorComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-error',
                template: `<mat-error *ngIf="errorControl && errorControl.hasError('required')">
  {{config.errorMessages.required}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('email')">
  {{config.errorMessages.email}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('pattern')">
  {{config.errorMessages.pattern}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('minLength')">
  {{config.errorMessages.minLength}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('maxLength')">
  {{config.errorMessages.maxLength}}
</mat-error>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ErrorComponent.ctorParameters = () => [
    { type: Injector }
];
ErrorComponent.propDecorators = {
    errorControl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ErrorComponent.prototype.errorControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXFCcEQsTUFBTSxxQkFBc0IsU0FBUSxpQkFBaUI7Ozs7SUFHbkQsWUFBWSxTQUFtQjtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbEI7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7YUFjQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQXRCa0MsUUFBUTs7OzJCQXdCeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWVycm9yJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JDb250cm9sICYmIGVycm9yQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICB7e2NvbmZpZy5lcnJvck1lc3NhZ2VzLnJlcXVpcmVkfX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ2VtYWlsJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5lbWFpbH19XG48L21hdC1lcnJvcj5cbjxtYXQtZXJyb3IgKm5nSWY9XCJlcnJvckNvbnRyb2wgJiYgZXJyb3JDb250cm9sLmhhc0Vycm9yKCdwYXR0ZXJuJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5wYXR0ZXJufX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ21pbkxlbmd0aCcpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMubWluTGVuZ3RofX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ21heExlbmd0aCcpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMubWF4TGVuZ3RofX1cbjwvbWF0LWVycm9yPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHsgIFxuICBASW5wdXQoKSBlcnJvckNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=