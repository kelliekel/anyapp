/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
var TextareaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextareaComponent, _super);
    function TextareaComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.type = "text";
        return _this;
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeForm();
    };
    TextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-textarea',
                    template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <textarea matInput [placeholder]=\"placeholder\" #input [type]=\"type\" [(ngModel)]=\"innerValue\" \n    [errorStateMatcher]=\"matcher\" [disabled]=\"disabled\"></textarea>\n\n  <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n  \n<aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>\n\n</mat-form-field>\n<!--[formControl]=\"form?.controls[formControlName]\"-->",
                    styles: [""],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TextareaComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    TextareaComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    TextareaComponent.propDecorators = {
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        type: [{ type: Input }],
        hint: [{ type: Input }]
    };
    return TextareaComponent;
}(AnyAppModelControl));
export { TextareaComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFxQyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQTJCZiw2Q0FBa0I7SUFNdkQsMkJBQVksU0FBbUI7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7cUJBTHVCLE1BQU07O0tBSzdCOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSx5Y0FhMkM7b0JBQ3JELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQTVCOEMsUUFBUTs7O3dCQThCcEQsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7NEJBakNSO0VBNkJ1QyxrQkFBa0I7U0FBNUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gIHt7bGFiZWx9fVxuPC9hYS1jb21wLWxhYmVsPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDx0ZXh0YXJlYSBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgW3R5cGVdPVwidHlwZVwiIFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFxuICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC90ZXh0YXJlYT5cblxuICA8bWF0LWhpbnQgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxuICBcbjxhYS1jb21wLWVycm9yIFtlcnJvckNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj48L2FhLWNvbXAtZXJyb3I+XG5cbjwvbWF0LWZvcm0tZmllbGQ+XG48IS0tW2Zvcm1Db250cm9sXT1cImZvcm0/LmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV1cIi0tPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCBcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRhcmVhQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwTW9kZWxDb250cm9sIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7ICBcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gXCJ0ZXh0XCI7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiJdfQ==