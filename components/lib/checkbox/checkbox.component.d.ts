import { OnInit, Injector } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export declare class CheckboxComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
    label: string;
    labelPosition: 'before' | 'after';
    hint: string;
    slideToggle: boolean;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
