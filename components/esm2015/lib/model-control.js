/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { AnyAppFormControl } from "./form-control";
import { AnyAppErrorStateMatcher } from "./error-state-matcher";
/**
 * @abstract
 */
export class AnyAppModelControl extends AnyAppFormControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this._innerValue = null;
        // propagate the new value to the outside world
        this.propagateChange = (_) => { };
        this.matcher = new AnyAppErrorStateMatcher();
    }
    /**
     * @return {?}
     */
    get innerValue() {
        return this._innerValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set innerValue(val) {
        this._innerValue = val;
        this.propagateChange(this._innerValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onModelChange(event) {
        if (this._innerValue != event) {
            this.innerValue = event; // update only if changed
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined) {
            this._innerValue = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
if (false) {
    /** @type {?} */
    AnyAppModelControl.prototype._innerValue;
    /** @type {?} */
    AnyAppModelControl.prototype.matcher;
    /** @type {?} */
    AnyAppModelControl.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVoRSxNQUFNLHlCQUFtQyxTQUFRLGlCQUFpQjs7OztJQUlqRSxZQUFZLFNBQW1CO1FBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzsyQkFKUyxJQUFJOzsrQkE4QmIsQ0FBQyxDQUFNLEVBQUUsRUFBRSxJQUFJO1FBekJoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztLQUM3Qzs7OztJQUVELElBQUksVUFBVTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3hCOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0tBQ0Q7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRDs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0tBQzFCOzs7O0lBR0QsaUJBQWlCLE1BQU07Q0FDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlBcHBGb3JtQ29udHJvbCB9IGZyb20gXCIuL2Zvcm0tY29udHJvbFwiO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFueUFwcEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSBcIi4vZXJyb3Itc3RhdGUtbWF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFueUFwcE1vZGVsQ29udHJvbCBleHRlbmRzIEFueUFwcEZvcm1Db250cm9sIHtcclxuXHRwcml2YXRlIF9pbm5lclZhbHVlOiBhbnkgPSBudWxsO1xyXG5cdG1hdGNoZXI6IEFueUFwcEVycm9yU3RhdGVNYXRjaGVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHRzdXBlcihfaW5qZWN0b3IpO1xyXG5cdFx0dGhpcy5tYXRjaGVyID0gbmV3IEFueUFwcEVycm9yU3RhdGVNYXRjaGVyKCk7XHJcblx0fVxyXG5cclxuXHRnZXQgaW5uZXJWYWx1ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pbm5lclZhbHVlO1xyXG5cdH1cclxuXHRzZXQgaW5uZXJWYWx1ZSh2YWwpIHtcclxuXHRcdHRoaXMuX2lubmVyVmFsdWUgPSB2YWw7XHJcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl9pbm5lclZhbHVlKTtcclxuXHR9XHJcblx0XHJcblx0b25Nb2RlbENoYW5nZShldmVudCkge1xyXG5cdFx0aWYgKHRoaXMuX2lubmVyVmFsdWUgIT0gZXZlbnQpIHtcclxuXHRcdFx0dGhpcy5pbm5lclZhbHVlID0gZXZlbnQ7IC8vIHVwZGF0ZSBvbmx5IGlmIGNoYW5nZWRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGdldHMgY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgaW5pdGlhbGl6ZWQgKHdyaXRlIHRvIHZpZXcpXHJcblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcblx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLl9pbm5lclZhbHVlID0gdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBwcm9wYWdhdGUgdGhlIG5ldyB2YWx1ZSB0byB0aGUgb3V0c2lkZSB3b3JsZFxyXG5cdHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuXHJcblx0Ly8gaGFzIGFjY2VzcyB0byBhIGZ1bmN0aW9uIHRoYXQgaW5mb3JtcyB0aGUgb3V0c2lkZSB3b3JsZCBhYm91dCBjaGFuZ2VzXHJcblx0cmVnaXN0ZXJPbkNoYW5nZShmbikge1xyXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuXHR9XHJcblxyXG5cdC8vIHJlZ2lzdGVycyBhIGNhbGxiYWNrIHRoYXQgaXMgZXhjdXRlZCB3aGVuZXZlciBhIGZvcm0gY29udHJvbCBpcyDigJx0b3VjaGVk4oCdXHJcblx0cmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cclxufSJdfQ==