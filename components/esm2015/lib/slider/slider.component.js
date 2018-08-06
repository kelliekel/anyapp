/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export class SliderComponent extends AnyAppModelControl {
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
        this.initializeForm();
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-slider',
                template: `<aa-comp-label *ngIf="label">
    {{label}}
  </aa-comp-label>
  
<mat-slider [min]="min" [max]="max" [step]="step" #input [(ngModel)]="innerValue" 
  [disabled]="disabled"></mat-slider>

<mat-hint *ngIf="hint">{{hint}}</mat-hint>


<aa-comp-error [errorControl]="formControl"></aa-comp-error>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => SliderComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: Injector }
];
SliderComponent.propDecorators = {
    label: [{ type: Input }],
    hint: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SliderComponent.prototype.label;
    /** @type {?} */
    SliderComponent.prototype.hint;
    /** @type {?} */
    SliderComponent.prototype.min;
    /** @type {?} */
    SliderComponent.prototype.max;
    /** @type {?} */
    SliderComponent.prototype.step;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXdCdEQsTUFBTSxzQkFBdUIsU0FBUSxrQkFBa0I7Ozs7SUFRckQsWUFBWSxTQUFtQjtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbEI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs2REFVaUQ7Z0JBQzNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjs7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBekI4QyxRQUFROzs7b0JBMkJwRCxLQUFLO21CQUNMLEtBQUs7a0JBRUwsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICAgIHt7bGFiZWx9fVxuICA8L2FhLWNvbXAtbGFiZWw+XG4gIFxuPG1hdC1zbGlkZXIgW21pbl09XCJtaW5cIiBbbWF4XT1cIm1heFwiIFtzdGVwXT1cInN0ZXBcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvbWF0LXNsaWRlcj5cblxuPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cblxuXG48YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cblxufVxuIl19