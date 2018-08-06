/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class AnyAppErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        /** @type {?} */
        var returnVal = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        return returnVal;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Itc3RhdGUtbWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9lcnJvci1zdGF0ZS1tYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNOzs7Ozs7SUFDSixZQUFZLENBQUMsT0FBMkIsRUFBRSxJQUF3Qzs7UUFDaEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBQzNDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEcsTUFBTSxDQUFDLFNBQVMsQ0FBQztLQUNsQjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW55QXBwRXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XHJcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xyXG4gICAgdmFyIHJldHVyblZhbCA9ICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCB8fCBpc1N1Ym1pdHRlZCkpO1xyXG4gICAgcmV0dXJuIHJldHVyblZhbDtcclxuICB9XHJcbn0iXX0=