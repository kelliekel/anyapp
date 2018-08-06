import { OnInit, Injector } from '@angular/core';
import { AnyAppModelControl } from '../model-control';
export declare class SelectComponent extends AnyAppModelControl implements OnInit {
    items: any[];
    valueField: string;
    textField: string;
    multiple: boolean;
    label: string;
    placeholder: string;
    hint: string;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
