import { OnInit, Injector } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
import { DateAdapter } from '@angular/material/core';
export declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare class DatepickerComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {
    private _adapter;
    label: string;
    placeholder: string;
    hint: string;
    locale: string;
    constructor(_injector: Injector, _adapter: DateAdapter<any>);
    ngOnInit(): void;
}
