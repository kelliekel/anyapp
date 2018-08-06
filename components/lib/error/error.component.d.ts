import { OnInit, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyAppBaseControl } from '../base-control';
export declare class ErrorComponent extends AnyAppBaseControl implements OnInit {
    errorControl: FormControl;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
