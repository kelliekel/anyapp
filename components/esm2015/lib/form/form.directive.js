/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
import { AnyAppBaseControl } from '../base-control';
export class FormDirective extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.aaCompForm != null) {
            this.aaCompForm.ngSubmit.subscribe((data) => {
                if (this.aaCompForm.valid == false) {
                    /** @type {?} */
                    var sb = this.componentsService.showMessage(this.config.errorMessages.invalidFormMessage, null);
                    sb.onAction().subscribe(x => {
                        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MESSAGE_CLICK));
                    });
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.reset == true) {
            this.aaCompForm.resetForm();
        }
    }
}
FormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aa-comp-form]'
            },] },
];
/** @nocollapse */
FormDirective.ctorParameters = () => [
    { type: Injector }
];
FormDirective.propDecorators = {
    aaCompForm: [{ type: Input }],
    reset: [{ type: Input }],
    invalidFormMessage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormDirective.prototype.aaCompForm;
    /** @type {?} */
    FormDirective.prototype.reset;
    /** @type {?} */
    FormDirective.prototype.invalidFormMessage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFnQyxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLG9CQUFxQixTQUFRLGlCQUFpQjs7OztJQUtsRCxZQUNFLFNBQW1CO1FBQ2pCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNwQjs7OztJQUVELFFBQVE7UUFDTixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7O29CQUNsQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNoRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO3FCQUN2RSxDQUFDLENBQUM7aUJBQ0o7YUFDRixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzdCO0tBQ0Y7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQVAyRSxRQUFROzs7eUJBU2pGLEtBQUs7b0JBQ0wsS0FBSztpQ0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBFdmVudE1vZGVsLCBBbnlBcHBFdmVudEtleXMgfSBmcm9tICcuLi9jb21wb25lbnRzLm1vZGVsJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FhLWNvbXAtZm9ybV0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1EaXJlY3RpdmUgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYWFDb21wRm9ybTogTmdGb3JtO1xuICBASW5wdXQoKSByZXNldDogYm9vbGVhbjtcbiAgQElucHV0KCkgaW52YWxpZEZvcm1NZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmKHRoaXMuYWFDb21wRm9ybSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFhQ29tcEZvcm0ubmdTdWJtaXQuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuYWFDb21wRm9ybS52YWxpZCA9PSBmYWxzZSkge1xuICAgICAgICAgIHZhciBzYiA9IHRoaXMuY29tcG9uZW50c1NlcnZpY2Uuc2hvd01lc3NhZ2UodGhpcy5jb25maWcuZXJyb3JNZXNzYWdlcy5pbnZhbGlkRm9ybU1lc3NhZ2UsIG51bGwpO1xuICAgICAgICAgIHNiLm9uQWN0aW9uKCkuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWwoQW55QXBwRXZlbnRLZXlzLk1FU1NBR0VfQ0xJQ0spKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYodGhpcy5yZXNldCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFhQ29tcEZvcm0ucmVzZXRGb3JtKCk7XG4gICAgfVxuICB9XG59XG4iXX0=