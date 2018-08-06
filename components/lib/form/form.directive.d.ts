import { OnInit, OnChanges, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnyAppBaseControl } from '../base-control';
export declare class FormDirective extends AnyAppBaseControl implements OnInit, OnChanges {
    aaCompForm: NgForm;
    reset: boolean;
    invalidFormMessage: string;
    constructor(_injector: Injector);
    ngOnInit(): void;
    ngOnChanges(): void;
}
