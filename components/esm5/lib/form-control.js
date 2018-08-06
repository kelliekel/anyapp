/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { AnyAppBaseControl } from "./base-control";
import { hasRequiredField } from "./util";
/**
 * @abstract
 */
var AnyAppFormControl = /** @class */ (function (_super) {
    tslib_1.__extends(AnyAppFormControl, _super);
    function AnyAppFormControl(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this.disabled = false;
        return _this;
    }
    /**
     * @return {?}
     */
    AnyAppFormControl.prototype.initializeForm = /**
     * @return {?}
     */
    function () {
        if (this.formControlName) {
            // name = set
            if (this.formControl == null) {
                // fc is not set
                if (this.form && this.form.form) {
                    // find control and set
                    this.formControl = /** @type {?} */ (this.form.form.controls[this.formControlName]);
                }
            }
        }
        if (this.formControl) {
            this.hasRequiredField = hasRequiredField(this.formControl);
        }
    };
    AnyAppFormControl.propDecorators = {
        form: [{ type: Input }],
        formControlName: [{ type: Input }],
        formControl: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return AnyAppFormControl;
}(AnyAppBaseControl));
export { AnyAppFormControl };
if (false) {
    /** @type {?} */
    AnyAppFormControl.prototype.form;
    /** @type {?} */
    AnyAppFormControl.prototype.formControlName;
    /** @type {?} */
    AnyAppFormControl.prototype.formControl;
    /** @type {?} */
    AnyAppFormControl.prototype.disabled;
    /** @type {?} */
    AnyAppFormControl.prototype.hasRequiredField;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0lBRU0sNkNBQWlCO0lBUS9ELDJCQUFZLFNBQW1CO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO3lCQU40QixLQUFLOztLQU1qQzs7OztJQUVELDBDQUFjOzs7SUFBZDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7b0JBQ2hDLElBQUksQ0FBQyxXQUFXLHFCQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFnQixDQUFBLENBQUM7aUJBQ2pGO2FBQ0Y7U0FDRjtRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUQ7S0FDRjs7dUJBdkJBLEtBQUs7a0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7OzRCQVZSO0VBTWdELGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ0Zvcm0sIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFueUFwcENvbXBvbmVudHNDb25maWcsIEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyB9IGZyb20gXCIuL2NvbXBvbmVudHMuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSBcIi4vYmFzZS1jb250cm9sXCI7XHJcbmltcG9ydCB7IGhhc1JlcXVpcmVkRmllbGQgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW55QXBwRm9ybUNvbnRyb2wgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCB7XHJcbiAgQElucHV0KCkgZm9ybTogTmdGb3JtOyAvLyBmb3JtIGNvbnRhaW5zIGZvcm1ncm91cFxyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBoYXNSZXF1aXJlZEZpZWxkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZUZvcm0oKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbE5hbWUpIHsgLy8gbmFtZSA9IHNldFxyXG4gICAgICBpZiAodGhpcy5mb3JtQ29udHJvbCA9PSBudWxsKSB7IC8vIGZjIGlzIG5vdCBzZXRcclxuICAgICAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5mb3JtKSB7IC8vIGZpbmQgY29udHJvbCBhbmQgc2V0XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sID0gdGhpcy5mb3JtLmZvcm0uY29udHJvbHNbdGhpcy5mb3JtQ29udHJvbE5hbWVdIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZm9ybUNvbnRyb2wpIHtcclxuICAgICAgdGhpcy5oYXNSZXF1aXJlZEZpZWxkID0gaGFzUmVxdWlyZWRGaWVsZCh0aGlzLmZvcm1Db250cm9sKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=