import { OnInit, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
export declare class LabelComponent extends AnyAppFormControl implements OnInit {
    for: string;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
