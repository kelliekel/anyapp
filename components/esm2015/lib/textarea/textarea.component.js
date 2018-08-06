/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export class TextareaComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.type = "text";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-textarea',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <textarea matInput [placeholder]="placeholder" #input [type]="type" [(ngModel)]="innerValue" 
    [errorStateMatcher]="matcher" [disabled]="disabled"></textarea>

  <mat-hint *ngIf="hint">{{hint}}</mat-hint>
  
<aa-comp-error [errorControl]="formControl"></aa-comp-error>

</mat-form-field>
<!--[formControl]="form?.controls[formControlName]"-->`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextareaComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [
    { type: Injector }
];
TextareaComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    hint: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextareaComponent.prototype.label;
    /** @type {?} */
    TextareaComponent.prototype.placeholder;
    /** @type {?} */
    TextareaComponent.prototype.type;
    /** @type {?} */
    TextareaComponent.prototype.hint;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXFDLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUEyQnRELE1BQU0sd0JBQXlCLFNBQVEsa0JBQWtCOzs7O0lBTXZELFlBQVksU0FBbUI7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUpLLE1BQU07S0FLN0I7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozt1REFhMkM7Z0JBQ3JELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztZQTVCOEMsUUFBUTs7O29CQThCcEQsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8dGV4dGFyZWEgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFt0eXBlXT1cInR5cGVcIiBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvdGV4dGFyZWE+XG5cbiAgPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cbiAgXG48YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPlxuXG48L21hdC1mb3JtLWZpZWxkPlxuPCEtLVtmb3JtQ29udHJvbF09XCJmb3JtPy5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdXCItLT5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZXh0YXJlYUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgeyAgXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwidGV4dFwiO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iXX0=