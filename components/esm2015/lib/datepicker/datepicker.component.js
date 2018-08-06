/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
/** @type {?} */
const moment = _moment;
/** @type {?} */
export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
export class DatepickerComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     * @param {?} _adapter
     */
    constructor(_injector, _adapter) {
        super(_injector);
        this._adapter = _adapter;
        this.locale = this.config.locale;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._adapter.setLocale(this.locale);
        this.initializeForm();
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-datepicker',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <input matInput [disabled]="disabled" [matDatepicker]="picker" [placeholder]="placeholder" #input [(ngModel)]="innerValue" [errorStateMatcher]="matcher">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>

  <mat-hint *ngIf="hint">{{hint}}</mat-hint>


  <aa-comp-error [errorControl]="formControl"></aa-comp-error>
</mat-form-field>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => DatepickerComponent),
                        multi: true
                    },
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ]
            },] },
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: Injector },
    { type: DateAdapter }
];
DatepickerComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    hint: [{ type: Input }],
    locale: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.label;
    /** @type {?} */
    DatepickerComponent.prototype.placeholder;
    /** @type {?} */
    DatepickerComponent.prototype.hint;
    /** @type {?} */
    DatepickerComponent.prototype.locale;
    /** @type {?} */
    DatepickerComponent.prototype._adapter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQXFDLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQU10RixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7QUFLbEMsTUFBTSxNQUFNLEdBQXdCLE9BQU8sQ0FBQzs7QUFJNUMsYUFBYSxVQUFVLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsSUFBSTtRQUNmLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRixDQUFDO0FBZ0NGLE1BQU0sMEJBQTJCLFNBQVEsa0JBQWtCOzs7OztJQU96RCxZQUNFLFNBQW1CLEVBQ1g7UUFDUixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFEVCxhQUFRLEdBQVIsUUFBUTtRQUdoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2xDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O2tCQWFNO2dCQUNoQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ1osU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7O3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjs7OztvQkFJRCxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFDO29CQUM1RSxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO2lCQUNsRDthQUNGOzs7O1lBNURzRCxRQUFRO1lBSXZELFdBQVc7OztvQkEwRGhCLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcbmltcG9ydCB7TW9tZW50RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHJvbGx1cCBpcyB1c2VkLCBtb21lbnQgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgZGlmZmVyZW50bHkuXG4vLyBTaW5jZSBNb21lbnQuanMgZG9lc24ndCBoYXZlIGEgZGVmYXVsdCBleHBvcnQsIHdlIG5vcm1hbGx5IG5lZWQgdG8gaW1wb3J0IHVzaW5nIHRoZSBgKiBhc2Bcbi8vIHN5bnRheC4gSG93ZXZlciwgcm9sbHVwIGNyZWF0ZXMgYSBzeW50aGV0aWMgZGVmYXVsdCBtb2R1bGUgYW5kIHdlIHRodXMgbmVlZCB0byBpbXBvcnQgaXQgdXNpbmdcbi8vIHRoZSBgZGVmYXVsdCBhc2Agc3ludGF4LlxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHLCBBbnlBcHBDb21wb25lbnRzQ29uZmlnIH0gZnJvbSAnLi4vY29tcG9uZW50cy5jb25maWcnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWR1cGxpY2F0ZS1pbXBvcnRzXG4vL2ltcG9ydCB7ZGVmYXVsdCBhcyBfcm9sbHVwTW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSAvKl9yb2xsdXBNb21lbnQgfHwqLyBfbW9tZW50O1xuXG4vLyBTZWUgdGhlIE1vbWVudC5qcyBkb2NzIGZvciB0aGUgbWVhbmluZyBvZiB0aGVzZSBmb3JtYXRzOlxuLy8gaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTEwnLFxuICB9LFxuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiAnTEwnLFxuICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cblxuXG4gIDxhYS1jb21wLWVycm9yIFtlcnJvckNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj48L2FhLWNvbXAtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZXBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmcgYE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXJcbiAgICAvLyBhcHBsaWNhdGlvbidzIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mXG4gICAgLy8gb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0ZPUk1BVFN9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHsgIFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+KSB7XG4gICAgc3VwZXIoX2luamVjdG9yKTtcblxuICAgIHRoaXMubG9jYWxlID0gdGhpcy5jb25maWcubG9jYWxlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxufVxuIl19