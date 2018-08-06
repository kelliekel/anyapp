/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostListener, ElementRef, Renderer2, Input, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
export class ButtonComponent extends AnyAppFormControl {
    /**
     * @param {?} _injector
     * @param {?} renderer
     * @param {?} el
     */
    constructor(_injector, renderer, el) {
        super(_injector);
        this.renderer = renderer;
        this.el = el;
        this.timeout = true;
        this.type = 'button';
        this.style = 'flat';
        this.color = 'primary';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    submitAttachedForm(event) {
        if (this.form != null && this.type == "button") {
            // if form is set and type is button
            this.form.onSubmit(event); // this will also update the submitted state
            //this.form.ngSubmit.next(true);
            //this.form.ngSubmit.emit(event);
        }
        // make sure a user can not click the button multiple times within a limited time
        this.handleButtonTimeoutTreshold();
    }
    /**
     * @return {?}
     */
    handleButtonTimeoutTreshold() {
        if (this.timeout) {
            setTimeout(() => {
                this.setDisabled(true);
                setTimeout(() => { this.setDisabled(null); }, this.config.buttonConfig.buttonTimeoutThreshold);
            }, 0);
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabled(disabled) {
        if (disabled)
            this.renderer.setAttribute(this.el.nativeElement.children["button"], "disabled", disabled.toString());
        else
            this.renderer.removeAttribute(this.el.nativeElement.children["button"], "disabled");
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-button',
                template: `<ng-container [ngSwitch]="style">
  <button id="button" *ngSwitchCase="'raised'" mat-raised-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'stroked'" mat-stroked-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'flat'" mat-flat-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'icon'" mat-icon-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'fab'" mat-fab [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchDefault mat-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
</ng-container>

<ng-template #transclude><ng-content></ng-content></ng-template>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: Injector },
    { type: Renderer2 },
    { type: ElementRef }
];
ButtonComponent.propDecorators = {
    timeout: [{ type: Input }],
    type: [{ type: Input }],
    style: [{ type: Input }],
    color: [{ type: Input }],
    submitAttachedForm: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZ0JwRCxNQUFNLHNCQUF1QixTQUFRLGlCQUFpQjs7Ozs7O0lBUXBELFlBQ0UsU0FBbUIsRUFDWCxVQUNBO1FBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRlgsYUFBUSxHQUFSLFFBQVE7UUFDUixPQUFFLEdBQUYsRUFBRTt1QkFWZ0IsSUFBSTtvQkFFUixRQUFRO3FCQUU2QyxNQUFNO3FCQUNuQyxTQUFTO0tBT3hEOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxLQUFZO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQzs7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7OztTQUczQjs7UUFHRCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztLQUNwQzs7OztJQUVPLDJCQUEyQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ2hHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDs7Ozs7O0lBR0ssV0FBVyxDQUFDLFFBQWlCO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEcsSUFBSTtZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQzs7OztZQTFEekYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7O2lFQVNxRDtnQkFDL0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7WUFoQitFLFFBQVE7WUFBbEMsU0FBUztZQUFyQixVQUFVOzs7c0JBa0JqRCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFDTCxLQUFLO2lDQWFMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBGb3JtQ29udHJvbCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzdHlsZVwiPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoQ2FzZT1cIidyYWlzZWQnXCIgbWF0LXJhaXNlZC1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ3N0cm9rZWQnXCIgbWF0LXN0cm9rZWQtYnV0dG9uIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoQ2FzZT1cIidmbGF0J1wiIG1hdC1mbGF0LWJ1dHRvbiBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NvbG9yXT1cImNvbG9yXCI+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyYW5zY2x1ZGVcIj48L25nLWNvbnRhaW5lcj48L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiICpuZ1N3aXRjaENhc2U9XCInaWNvbidcIiBtYXQtaWNvbi1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ2ZhYidcIiBtYXQtZmFiIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoRGVmYXVsdCBtYXQtYnV0dG9uIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjdHJhbnNjbHVkZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwRm9ybUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aW1lb3V0OiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnYnV0dG9uJztcblxuICBASW5wdXQoKSBzdHlsZTogJ2RlZmF1bHQnIHwgJ3JhaXNlZCcgfCAnc3Ryb2tlZCcgfCAnZmxhdCcgfCAnaWNvbicgfCAnZmFiJyA9ICdmbGF0J1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHN1Ym1pdEF0dGFjaGVkRm9ybShldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtICE9IG51bGwgJiYgdGhpcy50eXBlID09IFwiYnV0dG9uXCIpIHsgLy8gaWYgZm9ybSBpcyBzZXQgYW5kIHR5cGUgaXMgYnV0dG9uXG4gICAgICB0aGlzLmZvcm0ub25TdWJtaXQoZXZlbnQpOyAvLyB0aGlzIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHN1Ym1pdHRlZCBzdGF0ZVxuICAgICAgLy90aGlzLmZvcm0ubmdTdWJtaXQubmV4dCh0cnVlKTtcbiAgICAgIC8vdGhpcy5mb3JtLm5nU3VibWl0LmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSBhIHVzZXIgY2FuIG5vdCBjbGljayB0aGUgYnV0dG9uIG11bHRpcGxlIHRpbWVzIHdpdGhpbiBhIGxpbWl0ZWQgdGltZVxuICAgIHRoaXMuaGFuZGxlQnV0dG9uVGltZW91dFRyZXNob2xkKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJ1dHRvblRpbWVvdXRUcmVzaG9sZCgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0RGlzYWJsZWQobnVsbCk7IH0sIHRoaXMuY29uZmlnLmJ1dHRvbkNvbmZpZy5idXR0b25UaW1lb3V0VGhyZXNob2xkKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGlzYWJsZWQpXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bXCJidXR0b25cIl0sIFwiZGlzYWJsZWRcIiwgZGlzYWJsZWQudG9TdHJpbmcoKSk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW1wiYnV0dG9uXCJdLCBcImRpc2FibGVkXCIpO1xuICB9XG59Il19