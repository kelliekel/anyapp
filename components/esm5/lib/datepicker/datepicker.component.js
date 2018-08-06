/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
/** @type {?} */
var moment = _moment;
/** @type {?} */
export var MY_FORMATS = {
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
var DatepickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DatepickerComponent, _super);
    function DatepickerComponent(_injector, _adapter) {
        var _this = _super.call(this, _injector) || this;
        _this._adapter = _adapter;
        _this.locale = _this.config.locale;
        return _this;
    }
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._adapter.setLocale(this.locale);
        this.initializeForm();
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-datepicker',
                    template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <input matInput [disabled]=\"disabled\" [matDatepicker]=\"picker\" [placeholder]=\"placeholder\" #input [(ngModel)]=\"innerValue\" [errorStateMatcher]=\"matcher\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n\n  <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n\n\n  <aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>\n</mat-form-field>",
                    styles: [""],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                            useExisting: forwardRef(function () { return DatepickerComponent; }),
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
    DatepickerComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: DateAdapter }
    ]; };
    DatepickerComponent.propDecorators = {
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        hint: [{ type: Input }],
        locale: [{ type: Input }]
    };
    return DatepickerComponent;
}(AnyAppModelControl));
export { DatepickerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBVSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFxQyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFNdEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0FBS2xDLElBQU0sTUFBTSxHQUF3QixPQUFPLENBQUM7O0FBSTVDLFdBQWEsVUFBVSxHQUFHO0lBQ3hCLEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxJQUFJO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLElBQUk7UUFDZixjQUFjLEVBQUUsVUFBVTtRQUMxQixhQUFhLEVBQUUsSUFBSTtRQUNuQixrQkFBa0IsRUFBRSxXQUFXO0tBQ2hDO0NBQ0YsQ0FBQzs7SUFnQ3VDLCtDQUFrQjtJQU96RCw2QkFDRSxTQUFtQixFQUNYO1FBRlYsWUFHRSxrQkFBTSxTQUFTLENBQUMsU0FHakI7UUFKUyxjQUFRLEdBQVIsUUFBUTtRQUdoQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztLQUNsQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGlnQkFhTTtvQkFDaEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaOzs7O3dCQUlELEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUM7d0JBQzVFLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7cUJBQ2xEO2lCQUNGOzs7O2dCQTVEc0QsUUFBUTtnQkFJdkQsV0FBVzs7O3dCQTBEaEIsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBRUwsS0FBSzs7OEJBbEVSO0VBNkR5QyxrQkFBa0I7U0FBOUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwTW9kZWxDb250cm9sIH0gZnJvbSAnLi4vbW9kZWwtY29udHJvbCc7XG5pbXBvcnQge01vbWVudERhdGVBZGFwdGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vLyBEZXBlbmRpbmcgb24gd2hldGhlciByb2xsdXAgaXMgdXNlZCwgbW9tZW50IG5lZWRzIHRvIGJlIGltcG9ydGVkIGRpZmZlcmVudGx5LlxuLy8gU2luY2UgTW9tZW50LmpzIGRvZXNuJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0LCB3ZSBub3JtYWxseSBuZWVkIHRvIGltcG9ydCB1c2luZyB0aGUgYCogYXNgXG4vLyBzeW50YXguIEhvd2V2ZXIsIHJvbGx1cCBjcmVhdGVzIGEgc3ludGhldGljIGRlZmF1bHQgbW9kdWxlIGFuZCB3ZSB0aHVzIG5lZWQgdG8gaW1wb3J0IGl0IHVzaW5nXG4vLyB0aGUgYGRlZmF1bHQgYXNgIHN5bnRheC5cbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRywgQW55QXBwQ29tcG9uZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbXBvbmVudHMuY29uZmlnJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuLy9pbXBvcnQge2RlZmF1bHQgYXMgX3JvbGx1cE1vbWVudH0gZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9tZW50ID0gLypfcm9sbHVwTW9tZW50IHx8Ki8gX21vbWVudDtcblxuLy8gU2VlIHRoZSBNb21lbnQuanMgZG9jcyBmb3IgdGhlIG1lYW5pbmcgb2YgdGhlc2UgZm9ybWF0czpcbi8vIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cbmV4cG9ydCBjb25zdCBNWV9GT1JNQVRTID0ge1xuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZTogYDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAge3tsYWJlbH19XG48L2FhLWNvbXAtbGFiZWw+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiICNpbnB1dCBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuXG4gIDxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+XG5cblxuICA8YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgLy9Bbmd1bGFyIGludGVybmFseSBpbmplY3RzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgTkdfVkFMVUVfQUNDRVNTT1IgdG9rZW5cbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVwaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nIGBNb21lbnREYXRlTW9kdWxlYCBpbiB5b3VyXG4gICAgLy8gYXBwbGljYXRpb24ncyByb290IG1vZHVsZS4gV2UgcHJvdmlkZSBpdCBhdCB0aGUgY29tcG9uZW50IGxldmVsIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZlxuICAgIC8vIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLCBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFXX0sXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9GT1JNQVRTfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwTW9kZWxDb250cm9sIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7ICBcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfYWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge1xuICAgIHN1cGVyKF9pbmplY3Rvcik7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMuY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2FkYXB0ZXIuc2V0TG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiJdfQ==