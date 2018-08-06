/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export class SelectComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.valueField = "id";
        this.textField = "text";
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-select',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <mat-select *ngIf="!multiple" [placeholder]="placeholder" #input [(ngModel)]="innerValue" [disabled]="disabled"
    [errorStateMatcher]="matcher">
    <mat-option *ngIf="hasRequiredField == false">Maak een keuze</mat-option>
    <mat-option *ngFor="let item of items" [value]="valueField != null ? item[valueField] : item">{{textField != null ? item[textField] : item}}</mat-option>
  </mat-select>
  
  <mat-select *ngIf="multiple" multiple [placeholder]="placeholder" #input [(ngModel)]="innerValue" [disabled]="disabled"
    [errorStateMatcher]="matcher">
    <mat-option *ngIf="hasRequiredField == false">Maak een keuze</mat-option>
    <mat-option *ngFor="let item of items" [value]="valueField != null ? item[valueField] : item">{{textField != null ? item[textField] : item}}</mat-option>
  </mat-select>

  <mat-hint *ngIf="hint">{{hint}}</mat-hint>
  
  
</mat-form-field>
<aa-comp-error [errorControl]="formControl"></aa-comp-error>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => SelectComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: Injector }
];
SelectComponent.propDecorators = {
    items: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    multiple: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    hint: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.items;
    /** @type {?} */
    SelectComponent.prototype.valueField;
    /** @type {?} */
    SelectComponent.prototype.textField;
    /** @type {?} */
    SelectComponent.prototype.multiple;
    /** @type {?} */
    SelectComponent.prototype.label;
    /** @type {?} */
    SelectComponent.prototype.placeholder;
    /** @type {?} */
    SelectComponent.prototype.hint;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQW1DdEQsTUFBTSxzQkFBdUIsU0FBUSxrQkFBa0I7Ozs7SUFVckQsWUFBWSxTQUFtQjtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7MEJBVFcsSUFBSTt5QkFDTCxNQUFNO3dCQUVOLEtBQUs7S0FPakM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQXFCaUQ7Z0JBQzNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjs7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBcEM4QyxRQUFROzs7b0JBc0NwRCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFFTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAge3tsYWJlbH19XG48L2FhLWNvbXAtbGFiZWw+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1zZWxlY3QgKm5nSWY9XCIhbXVsdGlwbGVcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0lmPVwiaGFzUmVxdWlyZWRGaWVsZCA9PSBmYWxzZVwiPk1hYWsgZWVuIGtldXplPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW3ZhbHVlXT1cInZhbHVlRmllbGQgIT0gbnVsbCA/IGl0ZW1bdmFsdWVGaWVsZF0gOiBpdGVtXCI+e3t0ZXh0RmllbGQgIT0gbnVsbCA/IGl0ZW1bdGV4dEZpZWxkXSA6IGl0ZW19fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuICBcbiAgPG1hdC1zZWxlY3QgKm5nSWY9XCJtdWx0aXBsZVwiIG11bHRpcGxlIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiICNpbnB1dCBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nSWY9XCJoYXNSZXF1aXJlZEZpZWxkID09IGZhbHNlXCI+TWFhayBlZW4ga2V1emU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbdmFsdWVdPVwidmFsdWVGaWVsZCAhPSBudWxsID8gaXRlbVt2YWx1ZUZpZWxkXSA6IGl0ZW1cIj57e3RleHRGaWVsZCAhPSBudWxsID8gaXRlbVt0ZXh0RmllbGRdIDogaXRlbX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG5cbiAgPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cbiAgXG4gIFxuPC9tYXQtZm9ybS1maWVsZD5cbjxhYS1jb21wLWVycm9yIFtlcnJvckNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj48L2FhLWNvbXAtZXJyb3I+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIC8vQW5ndWxhciBpbnRlcm5hbHkgaW5qZWN0cyBhbGwgdmFsdWVzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgb24gdGhlIE5HX1ZBTFVFX0FDQ0VTU09SIHRva2VuXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQW55QXBwTW9kZWxDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbXM6IGFueVtdO1xuICBASW5wdXQoKSB2YWx1ZUZpZWxkOiBzdHJpbmcgPSBcImlkXCI7XG4gIEBJbnB1dCgpIHRleHRGaWVsZDogc3RyaW5nID0gXCJ0ZXh0XCI7XG5cbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxufVxuIl19