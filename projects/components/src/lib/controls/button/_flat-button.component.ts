import { Component, OnInit, Input, Renderer2, ElementRef, Injector } from '@angular/core';
import { BaseButton } from './button';

@Component({
    selector: 'aa-flat-button',
    template: `
        <button mat-flat-button id="button"
            [matTooltip]="tooltip" 
            [type]="type" 
            [disabled]="disabled" 
            [color]="color"><ng-content></ng-content></button>
    `,//'TEST123 {{context?.disabled}} DIT:<ng-content></ng-content>:DIT',
    styles: ['']
})
export class FlatButtonComponent extends BaseButton { // or: implements IButtonComponent
    constructor(_injector: Injector) {
        super(_injector);
    }
}