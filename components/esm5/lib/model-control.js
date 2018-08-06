/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AnyAppFormControl } from "./form-control";
import { AnyAppErrorStateMatcher } from "./error-state-matcher";
/**
 * @abstract
 */
var /**
 * @abstract
 */
AnyAppModelControl = /** @class */ (function (_super) {
    tslib_1.__extends(AnyAppModelControl, _super);
    function AnyAppModelControl(_injector) {
        var _this = _super.call(this, _injector) || this;
        _this._innerValue = null;
        // propagate the new value to the outside world
        _this.propagateChange = function (_) { };
        _this.matcher = new AnyAppErrorStateMatcher();
        return _this;
    }
    Object.defineProperty(AnyAppModelControl.prototype, "innerValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._innerValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._innerValue = val;
            this.propagateChange(this._innerValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    AnyAppModelControl.prototype.onModelChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._innerValue != event) {
            this.innerValue = event; // update only if changed
        }
    };
    // gets called when the form is initialized (write to view)
    /**
     * @param {?} value
     * @return {?}
     */
    AnyAppModelControl.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            this._innerValue = value;
        }
    };
    // has access to a function that informs the outside world about changes
    /**
     * @param {?} fn
     * @return {?}
     */
    AnyAppModelControl.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    // registers a callback that is excuted whenever a form control is “touched”
    /**
     * @return {?}
     */
    AnyAppModelControl.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    return AnyAppModelControl;
}(AnyAppFormControl));
/**
 * @abstract
 */
export { AnyAppModelControl };
if (false) {
    /** @type {?} */
    AnyAppModelControl.prototype._innerValue;
    /** @type {?} */
    AnyAppModelControl.prototype.matcher;
    /** @type {?} */
    AnyAppModelControl.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFaEU7OztBQUFBO0lBQWlELDhDQUFpQjtJQUlqRSw0QkFBWSxTQUFtQjtRQUEvQixZQUNDLGtCQUFNLFNBQVMsQ0FBQyxTQUVoQjs0QkFOMEIsSUFBSTs7Z0NBOEJiLFVBQUMsQ0FBTSxLQUFRO1FBekJoQyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQzs7S0FDN0M7SUFFRCxzQkFBSSwwQ0FBVTs7OztRQUFkO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEI7Ozs7O1FBQ0QsVUFBZSxHQUFHO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDOzs7T0FKQTs7Ozs7SUFNRCwwQ0FBYTs7OztJQUFiLFVBQWMsS0FBSztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDeEI7S0FDRDtJQUVELDJEQUEyRDs7Ozs7SUFDM0QsdUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRDtJQUtELHdFQUF3RTs7Ozs7SUFDeEUsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQUU7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7S0FDMUI7SUFFRCw0RUFBNEU7Ozs7SUFDNUUsOENBQWlCOzs7SUFBakIsZUFBdUI7NkJBM0N4QjtFQUlpRCxpQkFBaUIsRUF3Q2pFLENBQUE7Ozs7QUF4Q0QsOEJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55QXBwRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gXCIuL2Vycm9yLXN0YXRlLW1hdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnlBcHBNb2RlbENvbnRyb2wgZXh0ZW5kcyBBbnlBcHBGb3JtQ29udHJvbCB7XHJcblx0cHJpdmF0ZSBfaW5uZXJWYWx1ZTogYW55ID0gbnVsbDtcclxuXHRtYXRjaGVyOiBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0c3VwZXIoX2luamVjdG9yKTtcclxuXHRcdHRoaXMubWF0Y2hlciA9IG5ldyBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlubmVyVmFsdWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faW5uZXJWYWx1ZTtcclxuXHR9XHJcblx0c2V0IGlubmVyVmFsdWUodmFsKSB7XHJcblx0XHR0aGlzLl9pbm5lclZhbHVlID0gdmFsO1xyXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5faW5uZXJWYWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdG9uTW9kZWxDaGFuZ2UoZXZlbnQpIHtcclxuXHRcdGlmICh0aGlzLl9pbm5lclZhbHVlICE9IGV2ZW50KSB7XHJcblx0XHRcdHRoaXMuaW5uZXJWYWx1ZSA9IGV2ZW50OyAvLyB1cGRhdGUgb25seSBpZiBjaGFuZ2VkXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBnZXRzIGNhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIGluaXRpYWxpemVkICh3cml0ZSB0byB2aWV3KVxyXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5faW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gcHJvcGFnYXRlIHRoZSBuZXcgdmFsdWUgdG8gdGhlIG91dHNpZGUgd29ybGRcclxuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcblxyXG5cdC8vIGhhcyBhY2Nlc3MgdG8gYSBmdW5jdGlvbiB0aGF0IGluZm9ybXMgdGhlIG91dHNpZGUgd29ybGQgYWJvdXQgY2hhbmdlc1xyXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcclxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcblx0fVxyXG5cclxuXHQvLyByZWdpc3RlcnMgYSBjYWxsYmFjayB0aGF0IGlzIGV4Y3V0ZWQgd2hlbmV2ZXIgYSBmb3JtIGNvbnRyb2wgaXMg4oCcdG91Y2hlZOKAnVxyXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCkgeyB9XHJcbn0iXX0=