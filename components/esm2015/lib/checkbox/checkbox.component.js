/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export class CheckboxComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.labelPosition = 'after';
        this.slideToggle = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-checkbox',
                template: `<mat-checkbox *ngIf="!slideToggle" #input [(ngModel)]="innerValue" [labelPosition]="labelPosition">
  <aa-comp-label *ngIf="label">
    {{label}}
  </aa-comp-label>
</mat-checkbox>

<mat-slide-toggle *ngIf="slideToggle" #input [(ngModel)]="innerValue" [disabled]="disabled">
  <aa-comp-label *ngIf="label">
    {{label}}
  </aa-comp-label>
</mat-slide-toggle>

<mat-hint *ngIf="hint">{{hint}}</mat-hint>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: Injector }
];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    labelPosition: [{ type: Input }],
    hint: [{ type: Input }],
    slideToggle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.labelPosition;
    /** @type {?} */
    CheckboxComponent.prototype.hint;
    /** @type {?} */
    CheckboxComponent.prototype.slideToggle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUEwQnRELE1BQU0sd0JBQXlCLFNBQVEsa0JBQWtCOzs7O0lBTXZELFlBQVksU0FBbUI7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZCQUwwQixPQUFPOzJCQUVwQixLQUFLO0tBSXBDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OzsyQ0FZK0I7Z0JBQ3pDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjs7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUEzQjhDLFFBQVE7OztvQkE2QnBELEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgPG1hdC1jaGVja2JveCAqbmdJZj1cIiFzbGlkZVRvZ2dsZVwiICNpbnB1dCBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbbGFiZWxQb3NpdGlvbl09XCJsYWJlbFBvc2l0aW9uXCI+XG4gIDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAgICB7e2xhYmVsfX1cbiAgPC9hYS1jb21wLWxhYmVsPlxuPC9tYXQtY2hlY2tib3g+XG5cbjxtYXQtc2xpZGUtdG9nZ2xlICpuZ0lmPVwic2xpZGVUb2dnbGVcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gIDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAgICB7e2xhYmVsfX1cbiAgPC9hYS1jb21wLWxhYmVsPlxuPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG48bWF0LWhpbnQgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuICBASW5wdXQoKSBzbGlkZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxufVxuIl19