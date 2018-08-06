/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export class InputComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.type = "text";
        this.maxLength = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-input',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <input matInput [placeholder]="placeholder" #input [type]="type" [(ngModel)]="innerValue" 
    [errorStateMatcher]="matcher" [disabled]="disabled">

  <mat-hint align="start" *ngIf="hint">{{hint}}</mat-hint>
  <mat-hint align="end" *ngIf="maxLength">{{input.value.length}} / {{maxLength}}</mat-hint>

  
  <aa-comp-error [errorControl]="formControl"></aa-comp-error>

</mat-form-field>
<!--[formControl]="form?.controls[formControlName]"-->`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => InputComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: Injector }
];
InputComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    hint: [{ type: Input }],
    maxLength: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.label;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.hint;
    /** @type {?} */
    InputComponent.prototype.maxLength;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUE2QnRELE1BQU0scUJBQXNCLFNBQVEsa0JBQWtCOzs7O0lBUXBELFlBQVksU0FBbUI7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQU5LLE1BQU07eUJBR0QsSUFBSTtLQUloQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O3VEQWUyQztnQkFDckQsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNaLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0JBQzdDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUE5QjhDLFFBQVE7OztvQkFnQ3BELEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWlucHV0JyxcbiAgdGVtcGxhdGU6IGA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gIHt7bGFiZWx9fVxuPC9hYS1jb21wLWxhYmVsPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgW3R5cGVdPVwidHlwZVwiIFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFxuICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG5cbiAgPG1hdC1oaW50IGFsaWduPVwic3RhcnRcIiAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+XG4gIDxtYXQtaGludCBhbGlnbj1cImVuZFwiICpuZ0lmPVwibWF4TGVuZ3RoXCI+e3tpbnB1dC52YWx1ZS5sZW5ndGh9fSAvIHt7bWF4TGVuZ3RofX08L21hdC1oaW50PlxuXG4gIFxuICA8YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPlxuXG48L21hdC1mb3JtLWZpZWxkPlxuPCEtLVtmb3JtQ29udHJvbF09XCJmb3JtPy5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdXCItLT5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgLy9Bbmd1bGFyIGludGVybmFseSBpbmplY3RzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgTkdfVkFMVUVfQUNDRVNTT1IgdG9rZW5cbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQW55QXBwTW9kZWxDb250cm9sIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7ICBcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gXCJ0ZXh0XCI7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iXX0=