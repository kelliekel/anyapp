/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AnyAppErrorStateMatcher = /** @class */ (function () {
    function AnyAppErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    AnyAppErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        /** @type {?} */
        var isSubmitted = form && form.submitted;
        /** @type {?} */
        var returnVal = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        return returnVal;
    };
    return AnyAppErrorStateMatcher;
}());
export { AnyAppErrorStateMatcher };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Itc3RhdGUtbWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1zdGF0ZS1tYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxJQUFBOzs7Ozs7OztJQUNFLDhDQUFZOzs7OztJQUFaLFVBQWEsT0FBMkIsRUFBRSxJQUF3Qzs7UUFDaEYsSUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBQzNDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEcsTUFBTSxDQUFDLFNBQVMsQ0FBQztLQUNsQjtrQ0FSSDtJQVNDLENBQUE7QUFORCxtQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFueUFwcEVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xyXG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcclxuICAgIHZhciByZXR1cm5WYWwgPSAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcclxuICAgIHJldHVybiByZXR1cm5WYWw7XHJcbiAgfVxyXG59Il19