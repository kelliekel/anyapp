/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
var CheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxComponent, _super);
    function CheckboxComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.labelPosition = 'after';
        _this.slideToggle = false;
        return _this;
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeForm();
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-checkbox',
                    template: "<mat-checkbox *ngIf=\"!slideToggle\" #input [(ngModel)]=\"innerValue\" [labelPosition]=\"labelPosition\">\n  <aa-comp-label *ngIf=\"label\">\n    {{label}}\n  </aa-comp-label>\n</mat-checkbox>\n\n<mat-slide-toggle *ngIf=\"slideToggle\" #input [(ngModel)]=\"innerValue\" [disabled]=\"disabled\">\n  <aa-comp-label *ngIf=\"label\">\n    {{label}}\n  </aa-comp-label>\n</mat-slide-toggle>\n\n<mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>",
                    styles: [""],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                            useExisting: forwardRef(function () { return CheckboxComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    CheckboxComponent.propDecorators = {
        label: [{ type: Input }],
        labelPosition: [{ type: Input }],
        hint: [{ type: Input }],
        slideToggle: [{ type: Input }]
    };
    return CheckboxComponent;
}(AnyAppModelControl));
export { CheckboxComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQTBCZiw2Q0FBa0I7SUFNdkQsMkJBQVksU0FBbUI7UUFBL0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7OEJBTjRDLE9BQU87NEJBRXBCLEtBQUs7O0tBSXBDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxtYkFZK0I7b0JBQ3pDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkEzQjhDLFFBQVE7Ozt3QkE2QnBELEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7OzRCQWhDUjtFQTRCdUMsa0JBQWtCO1NBQTVDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiIXNsaWRlVG9nZ2xlXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIj5cbiAgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICAgIHt7bGFiZWx9fVxuICA8L2FhLWNvbXAtbGFiZWw+XG48L21hdC1jaGVja2JveD5cblxuPG1hdC1zbGlkZS10b2dnbGUgKm5nSWY9XCJzbGlkZVRvZ2dsZVwiICNpbnB1dCBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICAgIHt7bGFiZWx9fVxuICA8L2FhLWNvbXAtbGFiZWw+XG48L21hdC1zbGlkZS10b2dnbGU+XG5cbjxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIC8vQW5ndWxhciBpbnRlcm5hbHkgaW5qZWN0cyBhbGwgdmFsdWVzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgb24gdGhlIE5HX1ZBTFVFX0FDQ0VTU09SIHRva2VuXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsaWRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iXX0=