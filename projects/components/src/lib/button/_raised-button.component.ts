import { Component, OnInit, Input, Renderer2, ElementRef, Injector } from '@angular/core';
import { BaseButton } from './button';
import { ANYAPP_COLOR, ANYAPP_BUTTON_TYPE } from '../components.types';
import { AnyAppFormControl } from '../form-control';

@Component({
    selector: 'aa-raised-button',
    template: `
        <button mat-raised-button id="button"
            [matTooltip]="tooltip" 
            [type]="type" 
            [disabled]="disabled" 
            [color]="color"><ng-content></ng-content></button>
    `,//'TEST123 {{context?.disabled}} DIT:<ng-content></ng-content>:DIT',
    styles: ['']
})
export class RaisedButtonComponent extends BaseButton { // or: implements IButtonComponent
    constructor(_injector: Injector) {
        super(_injector);
    }
}