/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Input } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { AnyAppBaseControl } from "./base-control";
import { hasRequiredField } from "./util";
/**
 * @abstract
 */
export class AnyAppFormControl extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    initializeForm() {
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
    }
}
AnyAppFormControl.propDecorators = {
    form: [{ type: Input }],
    formControlName: [{ type: Input }],
    formControl: [{ type: Input }],
    disabled: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQUUxQyxNQUFNLHdCQUFrQyxTQUFRLGlCQUFpQjs7OztJQVEvRCxZQUFZLFNBQW1CO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFMVSxLQUFLO0tBTWpDOzs7O0lBRUQsY0FBYztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7b0JBQ2hDLElBQUksQ0FBQyxXQUFXLHFCQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFnQixDQUFBLENBQUM7aUJBQ2pGO2FBQ0Y7U0FDRjtRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUQ7S0FDRjs7O21CQXZCQSxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmdGb3JtLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBBbnlBcHBDb21wb25lbnRzQ29uZmlnLCBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcgfSBmcm9tIFwiLi9jb21wb25lbnRzLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gXCIuL2Jhc2UtY29udHJvbFwiO1xyXG5pbXBvcnQgeyBoYXNSZXF1aXJlZEZpZWxkIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFueUFwcEZvcm1Db250cm9sIGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wge1xyXG4gIEBJbnB1dCgpIGZvcm06IE5nRm9ybTsgLy8gZm9ybSBjb250YWlucyBmb3JtZ3JvdXBcclxuICBASW5wdXQoKSBmb3JtQ29udHJvbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgaGFzUmVxdWlyZWRGaWVsZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgc3VwZXIoX2luamVjdG9yKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVGb3JtKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB7IC8vIG5hbWUgPSBzZXRcclxuICAgICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wgPT0gbnVsbCkgeyAvLyBmYyBpcyBub3Qgc2V0XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0uZm9ybSkgeyAvLyBmaW5kIGNvbnRyb2wgYW5kIHNldFxyXG4gICAgICAgICAgdGhpcy5mb3JtQ29udHJvbCA9IHRoaXMuZm9ybS5mb3JtLmNvbnRyb2xzW3RoaXMuZm9ybUNvbnRyb2xOYW1lXSBhcyBGb3JtQ29udHJvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmZvcm1Db250cm9sKSB7XHJcbiAgICAgIHRoaXMuaGFzUmVxdWlyZWRGaWVsZCA9IGhhc1JlcXVpcmVkRmllbGQodGhpcy5mb3JtQ29udHJvbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19