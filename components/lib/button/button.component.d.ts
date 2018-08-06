import { OnInit, ElementRef, Renderer2, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
export declare class ButtonComponent extends AnyAppFormControl implements OnInit {
    private renderer;
    private el;
    timeout: boolean;
    type: string;
    style: 'default' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab';
    color: 'primary' | 'accent' | 'warn';
    constructor(_injector: Injector, renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    submitAttachedForm(event: Event): void;
    private handleButtonTimeoutTreshold();
    private setDisabled(disabled);
}
