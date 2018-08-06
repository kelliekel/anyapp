import { OnInit, Injector } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
export declare class TextareaComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
    label: string;
    placeholder: string;
    type: string;
    hint: string;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
