/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ElementRef, Renderer2, Input, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
var ButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonComponent, _super);
    function ButtonComponent(_injector, renderer, el) {
        var _this = _super.call(this, _injector) || this;
        _this.renderer = renderer;
        _this.el = el;
        _this.timeout = true;
        _this.type = 'button';
        _this.style = 'flat';
        _this.color = 'primary';
        return _this;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeForm();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.submitAttachedForm = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.form != null && this.type == "button") {
            // if form is set and type is button
            this.form.onSubmit(event); // this will also update the submitted state
            //this.form.ngSubmit.next(true);
            //this.form.ngSubmit.emit(event);
        }
        // make sure a user can not click the button multiple times within a limited time
        this.handleButtonTimeoutTreshold();
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.handleButtonTimeoutTreshold = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.timeout) {
            setTimeout(function () {
                _this.setDisabled(true);
                setTimeout(function () { _this.setDisabled(null); }, _this.config.buttonConfig.buttonTimeoutThreshold);
            }, 0);
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonComponent.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled)
            this.renderer.setAttribute(this.el.nativeElement.children["button"], "disabled", disabled.toString());
        else
            this.renderer.removeAttribute(this.el.nativeElement.children["button"], "disabled");
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-button',
                    template: "<ng-container [ngSwitch]=\"style\">\n  <button id=\"button\" *ngSwitchCase=\"'raised'\" mat-raised-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'stroked'\" mat-stroked-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'flat'\" mat-flat-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'icon'\" mat-icon-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'fab'\" mat-fab [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchDefault mat-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n</ng-container>\n\n<ng-template #transclude><ng-content></ng-content></ng-template>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    ButtonComponent.propDecorators = {
        timeout: [{ type: Input }],
        type: [{ type: Input }],
        style: [{ type: Input }],
        color: [{ type: Input }],
        submitAttachedForm: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ButtonComponent;
}(AnyAppFormControl));
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.timeout;
    /** @type {?} */
    ButtonComponent.prototype.type;
    /** @type {?} */
    ButtonComponent.prototype.style;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.renderer;
    /** @type {?} */
    ButtonComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFnQmYsMkNBQWlCO0lBUXBELHlCQUNFLFNBQW1CLEVBQ1gsVUFDQTtRQUhWLFlBSUksa0JBQU0sU0FBUyxDQUFDLFNBQ25CO1FBSFMsY0FBUSxHQUFSLFFBQVE7UUFDUixRQUFFLEdBQUYsRUFBRTt3QkFWZ0IsSUFBSTtxQkFFUixRQUFRO3NCQUU2QyxNQUFNO3NCQUNuQyxTQUFTOztLQU94RDs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFHRCw0Q0FBa0I7Ozs7SUFEbEIsVUFDbUIsS0FBWTtRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7U0FHM0I7O1FBR0QsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7S0FDcEM7Ozs7SUFFTyxxREFBMkI7Ozs7O1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixVQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ2hHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDs7Ozs7O0lBR0sscUNBQVc7Ozs7Y0FBQyxRQUFpQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hHLElBQUk7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7OztnQkExRHpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsc3dDQVNxRDtvQkFDL0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQWhCK0UsUUFBUTtnQkFBbEMsU0FBUztnQkFBckIsVUFBVTs7OzBCQWtCakQsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBQ0wsS0FBSztxQ0FhTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzswQkFwQ25DO0VBaUJxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEZvcm1Db250cm9sIH0gZnJvbSAnLi4vZm9ybS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInN0eWxlXCI+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ3JhaXNlZCdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NvbG9yXT1cImNvbG9yXCI+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyYW5zY2x1ZGVcIj48L25nLWNvbnRhaW5lcj48L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiICpuZ1N3aXRjaENhc2U9XCInc3Ryb2tlZCdcIiBtYXQtc3Ryb2tlZC1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ2ZsYXQnXCIgbWF0LWZsYXQtYnV0dG9uIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoQ2FzZT1cIidpY29uJ1wiIG1hdC1pY29uLWJ1dHRvbiBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NvbG9yXT1cImNvbG9yXCI+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyYW5zY2x1ZGVcIj48L25nLWNvbnRhaW5lcj48L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiICpuZ1N3aXRjaENhc2U9XCInZmFiJ1wiIG1hdC1mYWIgW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hEZWZhdWx0IG1hdC1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICN0cmFuc2NsdWRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBBbnlBcHBGb3JtQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpbWVvdXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xuXG4gIEBJbnB1dCgpIHN0eWxlOiAnZGVmYXVsdCcgfCAncmFpc2VkJyB8ICdzdHJva2VkJyB8ICdmbGF0JyB8ICdpY29uJyB8ICdmYWInID0gJ2ZsYXQnXG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgc3VibWl0QXR0YWNoZWRGb3JtKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmZvcm0gIT0gbnVsbCAmJiB0aGlzLnR5cGUgPT0gXCJidXR0b25cIikgeyAvLyBpZiBmb3JtIGlzIHNldCBhbmQgdHlwZSBpcyBidXR0b25cbiAgICAgIHRoaXMuZm9ybS5vblN1Ym1pdChldmVudCk7IC8vIHRoaXMgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgc3VibWl0dGVkIHN0YXRlXG4gICAgICAvL3RoaXMuZm9ybS5uZ1N1Ym1pdC5uZXh0KHRydWUpO1xuICAgICAgLy90aGlzLmZvcm0ubmdTdWJtaXQuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIGEgdXNlciBjYW4gbm90IGNsaWNrIHRoZSBidXR0b24gbXVsdGlwbGUgdGltZXMgd2l0aGluIGEgbGltaXRlZCB0aW1lXG4gICAgdGhpcy5oYW5kbGVCdXR0b25UaW1lb3V0VHJlc2hvbGQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQnV0dG9uVGltZW91dFRyZXNob2xkKCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zZXREaXNhYmxlZChudWxsKTsgfSwgdGhpcy5jb25maWcuYnV0dG9uQ29uZmlnLmJ1dHRvblRpbWVvdXRUaHJlc2hvbGQpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmIChkaXNhYmxlZClcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltcImJ1dHRvblwiXSwgXCJkaXNhYmxlZFwiLCBkaXNhYmxlZC50b1N0cmluZygpKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bXCJidXR0b25cIl0sIFwiZGlzYWJsZWRcIik7XG4gIH1cbn0iXX0=