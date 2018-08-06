/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Injector, Input } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
export class SideMenuComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.level = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onItemClick(model) {
        if (model)
            this.onEvent.emit(model);
    }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-side-menu',
                template: `<div class="wrapper" [style.paddingLeft.px]="level*10">
  <div *ngFor="let item of items">
    <aa-comp-side-menu-item (onEvent)="onItemClick($event)" [item]="item" [level]="level"></aa-comp-side-menu-item>

    <div><!--[hidden]="item.children?.length == 0 || !item.expanded"-->
      <aa-comp-side-menu [items]="item.children" [level]="level+1"></aa-comp-side-menu>
    </div>
  </div>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
SideMenuComponent.ctorParameters = () => [
    { type: Injector }
];
SideMenuComponent.propDecorators = {
    items: [{ type: Input }],
    level: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SideMenuComponent.prototype.items;
    /** @type {?} */
    SideMenuComponent.prototype.level;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZ0JwRCxNQUFNLHdCQUF5QixTQUFRLGlCQUFpQjs7OztJQUl0RCxZQUFZLFNBQW1CO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFITSxDQUFDO0tBSXpCOzs7O0lBRUQsUUFBUTtLQUNQOzs7OztJQUdELFdBQVcsQ0FBQyxLQUF3QztRQUNsRCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUM7WUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7O09BUUw7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7WUFoQjJCLFFBQVE7OztvQkFrQmpDLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcbmltcG9ydCB7IEFueUFwcEV2ZW50TW9kZWwsIEFueUFwcFRyZWVNb2RlbCB9IGZyb20gJy4uL2NvbXBvbmVudHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNpZGUtbWVudScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwibGV2ZWwqMTBcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgIDxhYS1jb21wLXNpZGUtbWVudS1pdGVtIChvbkV2ZW50KT1cIm9uSXRlbUNsaWNrKCRldmVudClcIiBbaXRlbV09XCJpdGVtXCIgW2xldmVsXT1cImxldmVsXCI+PC9hYS1jb21wLXNpZGUtbWVudS1pdGVtPlxuXG4gICAgPGRpdj48IS0tW2hpZGRlbl09XCJpdGVtLmNoaWxkcmVuPy5sZW5ndGggPT0gMCB8fCAhaXRlbS5leHBhbmRlZFwiLS0+XG4gICAgICA8YWEtY29tcC1zaWRlLW1lbnUgW2l0ZW1zXT1cIml0ZW0uY2hpbGRyZW5cIiBbbGV2ZWxdPVwibGV2ZWwrMVwiPjwvYWEtY29tcC1zaWRlLW1lbnU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtczogQW55QXBwVHJlZU1vZGVsW107XG4gIEBJbnB1dCgpIGxldmVsOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvLyBwYXNzIGV2ZW50IGVtaXR0ZXIgdG8gdGhlIGFwcFxuICBvbkl0ZW1DbGljayhtb2RlbDogQW55QXBwRXZlbnRNb2RlbDxBbnlBcHBUcmVlTW9kZWw+KSB7XG4gICAgaWYobW9kZWwpXG4gICAgICB0aGlzLm9uRXZlbnQuZW1pdChtb2RlbCk7XG4gIH1cblxufVxuIl19