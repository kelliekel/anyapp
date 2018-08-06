import { OnInit, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
export declare class LoadingComponent extends AnyAppBaseControl implements OnInit {
    visible: boolean;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
