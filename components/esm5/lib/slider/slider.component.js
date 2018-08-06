/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
var SliderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SliderComponent, _super);
    function SliderComponent(_injector) {
        return _super.call(this, _injector) || this;
    }
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeForm();
    };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-slider',
                    template: "<aa-comp-label *ngIf=\"label\">\n    {{label}}\n  </aa-comp-label>\n  \n<mat-slider [min]=\"min\" [max]=\"max\" [step]=\"step\" #input [(ngModel)]=\"innerValue\" \n  [disabled]=\"disabled\"></mat-slider>\n\n<mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n\n\n<aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>",
                    styles: [""],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                            useExisting: forwardRef(function () { return SliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    SliderComponent.propDecorators = {
        label: [{ type: Input }],
        hint: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }]
    };
    return SliderComponent;
}(AnyAppModelControl));
export { SliderComponent };
if (false) {
    /** @type {?} */
    SliderComponent.prototype.label;
    /** @type {?} */
    SliderComponent.prototype.hint;
    /** @type {?} */
    SliderComponent.prototype.min;
    /** @type {?} */
    SliderComponent.prototype.max;
    /** @type {?} */
    SliderComponent.prototype.step;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBd0JqQiwyQ0FBa0I7SUFRckQseUJBQVksU0FBbUI7ZUFDN0Isa0JBQU0sU0FBUyxDQUFDO0tBQ2pCOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxpVUFVaUQ7b0JBQzNELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDWixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQXpCOEMsUUFBUTs7O3dCQTJCcEQsS0FBSzt1QkFDTCxLQUFLO3NCQUVMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzswQkFoQ1I7RUEwQnFDLGtCQUFrQjtTQUExQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAgICB7e2xhYmVsfX1cbiAgPC9hYS1jb21wLWxhYmVsPlxuICBcbjxtYXQtc2xpZGVyIFttaW5dPVwibWluXCIgW21heF09XCJtYXhcIiBbc3RlcF09XCJzdGVwXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L21hdC1zbGlkZXI+XG5cbjxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+XG5cblxuPGFhLWNvbXAtZXJyb3IgW2Vycm9yQ29udHJvbF09XCJmb3JtQ29udHJvbFwiPjwvYWEtY29tcC1lcnJvcj5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgLy9Bbmd1bGFyIGludGVybmFseSBpbmplY3RzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgTkdfVkFMVUVfQUNDRVNTT1IgdG9rZW5cbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG5cbn1cbiJdfQ==