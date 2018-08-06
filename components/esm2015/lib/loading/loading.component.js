/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
export class LoadingComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.visible = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-loading',
                template: `<mat-progress-bar *ngIf="visible" mode="indeterminate"></mat-progress-bar>`,
                styles: [``]
            },] },
];
/** @nocollapse */
LoadingComponent.ctorParameters = () => [
    { type: Injector }
];
LoadingComponent.propDecorators = {
    visible: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.visible;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3BELE1BQU0sdUJBQXdCLFNBQVEsaUJBQWlCOzs7O0lBR3JELFlBQVksU0FBbUI7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3VCQUhTLEtBQUs7S0FJaEM7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsNEVBQTRFO2dCQUN0RixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQVBrQyxRQUFROzs7c0JBU3hDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtbG9hZGluZycsXG4gIHRlbXBsYXRlOiBgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJ2aXNpYmxlXCIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==