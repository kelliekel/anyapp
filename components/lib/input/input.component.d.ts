import { OnInit, Injector } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export declare class InputComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
    label: string;
    placeholder: string;
    type: string;
    hint: string;
    maxLength: number;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
