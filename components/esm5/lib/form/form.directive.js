/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
import { AnyAppBaseControl } from '../base-control';
var FormDirective = /** @class */ (function (_super) {
    tslib_1.__extends(FormDirective, _super);
    function FormDirective(_injector) {
        return _super.call(this, _injector) || this;
    }
    /**
     * @return {?}
     */
    FormDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.aaCompForm != null) {
            this.aaCompForm.ngSubmit.subscribe(function (data) {
                if (_this.aaCompForm.valid == false) {
                    /** @type {?} */
                    var sb = _this.componentsService.showMessage(_this.config.errorMessages.invalidFormMessage, null);
                    sb.onAction().subscribe(function (x) {
                        _this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MESSAGE_CLICK));
                    });
                }
            });
        }
    };
    /**
     * @return {?}
     */
    FormDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.reset == true) {
            this.aaCompForm.resetForm();
        }
    };
    FormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[aa-comp-form]'
                },] },
    ];
    /** @nocollapse */
    FormDirective.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    FormDirective.propDecorators = {
        aaCompForm: [{ type: Input }],
        reset: [{ type: Input }],
        invalidFormMessage: [{ type: Input }]
    };
    return FormDirective;
}(AnyAppBaseControl));
export { FormDirective };
if (false) {
    /** @type {?} */
    FormDirective.prototype.aaCompForm;
    /** @type {?} */
    FormDirective.prototype.reset;
    /** @type {?} */
    FormDirective.prototype.invalidFormMessage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBZ0MsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBS2pCLHlDQUFpQjtJQUtsRCx1QkFDRSxTQUFtQjtlQUNqQixrQkFBTSxTQUFTLENBQUM7S0FDbkI7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUN0QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDOztvQkFDbEMsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDaEcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7cUJBQ3ZFLENBQUMsQ0FBQztpQkFDSjthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM3QjtLQUNGOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQVAyRSxRQUFROzs7NkJBU2pGLEtBQUs7d0JBQ0wsS0FBSztxQ0FDTCxLQUFLOzt3QkFYUjtFQVFtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBJbmplY3QsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwRXZlbnRNb2RlbCwgQW55QXBwRXZlbnRLZXlzIH0gZnJvbSAnLi4vY29tcG9uZW50cy5tb2RlbCc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thYS1jb21wLWZvcm1dJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtRGlyZWN0aXZlIGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGFhQ29tcEZvcm06IE5nRm9ybTtcbiAgQElucHV0KCkgcmVzZXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGludmFsaWRGb3JtTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZih0aGlzLmFhQ29tcEZvcm0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5hYUNvbXBGb3JtLm5nU3VibWl0LnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZih0aGlzLmFhQ29tcEZvcm0udmFsaWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgc2IgPSB0aGlzLmNvbXBvbmVudHNTZXJ2aWNlLnNob3dNZXNzYWdlKHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMuaW52YWxpZEZvcm1NZXNzYWdlLCBudWxsKTtcbiAgICAgICAgICBzYi5vbkFjdGlvbigpLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsKEFueUFwcEV2ZW50S2V5cy5NRVNTQUdFX0NMSUNLKSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmKHRoaXMucmVzZXQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hYUNvbXBGb3JtLnJlc2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxufVxuIl19