/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
var SelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectComponent, _super);
    function SelectComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.valueField = "id";
        _this.textField = "text";
        _this.multiple = false;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeForm();
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-select',
                    template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <mat-select *ngIf=\"!multiple\" [placeholder]=\"placeholder\" #input [(ngModel)]=\"innerValue\" [disabled]=\"disabled\"\n    [errorStateMatcher]=\"matcher\">\n    <mat-option *ngIf=\"hasRequiredField == false\">Maak een keuze</mat-option>\n    <mat-option *ngFor=\"let item of items\" [value]=\"valueField != null ? item[valueField] : item\">{{textField != null ? item[textField] : item}}</mat-option>\n  </mat-select>\n  \n  <mat-select *ngIf=\"multiple\" multiple [placeholder]=\"placeholder\" #input [(ngModel)]=\"innerValue\" [disabled]=\"disabled\"\n    [errorStateMatcher]=\"matcher\">\n    <mat-option *ngIf=\"hasRequiredField == false\">Maak een keuze</mat-option>\n    <mat-option *ngFor=\"let item of items\" [value]=\"valueField != null ? item[valueField] : item\">{{textField != null ? item[textField] : item}}</mat-option>\n  </mat-select>\n\n  <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n  \n  \n</mat-form-field>\n<aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>",
                    styles: [""],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                            useExisting: forwardRef(function () { return SelectComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    SelectComponent.propDecorators = {
        items: [{ type: Input }],
        valueField: [{ type: Input }],
        textField: [{ type: Input }],
        multiple: [{ type: Input }],
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        hint: [{ type: Input }]
    };
    return SelectComponent;
}(AnyAppModelControl));
export { SelectComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBbUNqQiwyQ0FBa0I7SUFVckQseUJBQVksU0FBbUI7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7MkJBVjZCLElBQUk7MEJBQ0wsTUFBTTt5QkFFTixLQUFLOztLQU9qQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUseWpDQXFCaUQ7b0JBQzNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQXBDOEMsUUFBUTs7O3dCQXNDcEQsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBRUwsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7MEJBN0NSO0VBcUNxQyxrQkFBa0I7U0FBMUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwTW9kZWxDb250cm9sIH0gZnJvbSAnLi4vbW9kZWwtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gIHt7bGFiZWx9fVxuPC9hYS1jb21wLWxhYmVsPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtc2VsZWN0ICpuZ0lmPVwiIW11bHRpcGxlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdJZj1cImhhc1JlcXVpcmVkRmllbGQgPT0gZmFsc2VcIj5NYWFrIGVlbiBrZXV6ZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFt2YWx1ZV09XCJ2YWx1ZUZpZWxkICE9IG51bGwgPyBpdGVtW3ZhbHVlRmllbGRdIDogaXRlbVwiPnt7dGV4dEZpZWxkICE9IG51bGwgPyBpdGVtW3RleHRGaWVsZF0gOiBpdGVtfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbiAgXG4gIDxtYXQtc2VsZWN0ICpuZ0lmPVwibXVsdGlwbGVcIiBtdWx0aXBsZSBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0lmPVwiaGFzUmVxdWlyZWRGaWVsZCA9PSBmYWxzZVwiPk1hYWsgZWVuIGtldXplPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW3ZhbHVlXT1cInZhbHVlRmllbGQgIT0gbnVsbCA/IGl0ZW1bdmFsdWVGaWVsZF0gOiBpdGVtXCI+e3t0ZXh0RmllbGQgIT0gbnVsbCA/IGl0ZW1bdGV4dEZpZWxkXSA6IGl0ZW19fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuXG4gIDxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+XG4gIFxuICBcbjwvbWF0LWZvcm0tZmllbGQ+XG48YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nID0gXCJpZFwiO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZyA9IFwidGV4dFwiO1xuXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiJdfQ==