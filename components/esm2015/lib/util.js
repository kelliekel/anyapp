/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const hasRequiredField = (abstractControl) => {
    if (abstractControl.validator) {
        /** @type {?} */
        const validator = abstractControl.validator(/** @type {?} */ ({}));
        if (validator && validator["required"]) {
            return true;
        }
    }
    if (abstractControl['controls']) {
        for (const controlName in abstractControl['controls']) {
            if (abstractControl['controls'][controlName]) {
                if (hasRequiredField(abstractControl['controls'][controlName])) {
                    return true;
                }
            }
        }
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsYUFBYSxnQkFBZ0IsR0FBRyxDQUFDLGVBQWdDLEVBQVcsRUFBRTtJQUMxRSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7UUFDNUIsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsbUJBQUMsRUFBb0IsRUFBQyxDQUFDO1FBQ2xFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLFlBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sV0FBVyxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtLQUNKO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzUmVxdWlyZWRGaWVsZCA9IChhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBhYnN0cmFjdENvbnRyb2wudmFsaWRhdG9yKHt9YXMgQWJzdHJhY3RDb250cm9sKTtcclxuICAgICAgICBpZiAodmFsaWRhdG9yICYmIHZhbGlkYXRvci5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWJzdHJhY3RDb250cm9sWydjb250cm9scyddKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sTmFtZSBpbiBhYnN0cmFjdENvbnRyb2xbJ2NvbnRyb2xzJ10pIHtcclxuICAgICAgICAgICAgaWYgKGFic3RyYWN0Q29udHJvbFsnY29udHJvbHMnXVtjb250cm9sTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNSZXF1aXJlZEZpZWxkKGFic3RyYWN0Q29udHJvbFsnY29udHJvbHMnXVtjb250cm9sTmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07Il19