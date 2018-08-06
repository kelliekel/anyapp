/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
var InputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputComponent, _super);
    function InputComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.type = "text";
        _this.maxLength = null;
        return _this;
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeForm();
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-input',
                    template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <input matInput [placeholder]=\"placeholder\" #input [type]=\"type\" [(ngModel)]=\"innerValue\" \n    [errorStateMatcher]=\"matcher\" [disabled]=\"disabled\">\n\n  <mat-hint align=\"start\" *ngIf=\"hint\">{{hint}}</mat-hint>\n  <mat-hint align=\"end\" *ngIf=\"maxLength\">{{input.value.length}} / {{maxLength}}</mat-hint>\n\n  \n  <aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>\n\n</mat-form-field>\n<!--[formControl]=\"form?.controls[formControlName]\"-->",
                    styles: [""],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                            useExisting: forwardRef(function () { return InputComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    InputComponent.propDecorators = {
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        type: [{ type: Input }],
        hint: [{ type: Input }],
        maxLength: [{ type: Input }]
    };
    return InputComponent;
}(AnyAppModelControl));
export { InputComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQTZCbEIsMENBQWtCO0lBUXBELHdCQUFZLFNBQW1CO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO3FCQVB1QixNQUFNOzBCQUdELElBQUk7O0tBSWhDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsZ2pCQWUyQztvQkFDckQsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBOUI4QyxRQUFROzs7d0JBZ0NwRCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUVMLEtBQUs7O3lCQXJDUjtFQStCb0Msa0JBQWtCO1NBQXpDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFt0eXBlXT1cInR5cGVcIiBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuXG4gIDxtYXQtaGludCBhbGlnbj1cInN0YXJ0XCIgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxuICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIiAqbmdJZj1cIm1heExlbmd0aFwiPnt7aW5wdXQudmFsdWUubGVuZ3RofX0gLyB7e21heExlbmd0aH19PC9tYXQtaGludD5cblxuICBcbiAgPGFhLWNvbXAtZXJyb3IgW2Vycm9yQ29udHJvbF09XCJmb3JtQ29udHJvbFwiPjwvYWEtY29tcC1lcnJvcj5cblxuPC9tYXQtZm9ybS1maWVsZD5cbjwhLS1bZm9ybUNvbnRyb2xdPVwiZm9ybT8uY29udHJvbHNbZm9ybUNvbnRyb2xOYW1lXVwiLS0+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIC8vQW5ndWxhciBpbnRlcm5hbHkgaW5qZWN0cyBhbGwgdmFsdWVzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgb24gdGhlIE5HX1ZBTFVFX0FDQ0VTU09SIHRva2VuXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgeyAgXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwidGV4dFwiO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxufVxuIl19