/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export var hasRequiredField = function (abstractControl) {
    if (abstractControl.validator) {
        /** @type {?} */
        var validator = abstractControl.validator(/** @type {?} */ ({}));
        if (validator && validator["required"]) {
            return true;
        }
    }
    if (abstractControl['controls']) {
        for (var controlName in abstractControl['controls']) {
            if (abstractControl['controls'][controlName]) {
                if (hasRequiredField(abstractControl['controls'][controlName])) {
                    return true;
                }
            }
        }
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBYSxnQkFBZ0IsR0FBRyxVQUFDLGVBQWdDO0lBQzdELEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztRQUM1QixJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxtQkFBQyxFQUFvQixFQUFDLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsWUFBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUNELEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBTSxXQUFXLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtTQUNKO0tBQ0o7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNSZXF1aXJlZEZpZWxkID0gKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoYWJzdHJhY3RDb250cm9sLnZhbGlkYXRvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3Ioe31hcyBBYnN0cmFjdENvbnRyb2wpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhYnN0cmFjdENvbnRyb2xbJ2NvbnRyb2xzJ10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2xOYW1lIGluIGFic3RyYWN0Q29udHJvbFsnY29udHJvbHMnXSkge1xyXG4gICAgICAgICAgICBpZiAoYWJzdHJhY3RDb250cm9sWydjb250cm9scyddW2NvbnRyb2xOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1JlcXVpcmVkRmllbGQoYWJzdHJhY3RDb250cm9sWydjb250cm9scyddW2NvbnRyb2xOYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTsiXX0=